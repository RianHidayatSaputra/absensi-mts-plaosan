<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Siswa;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login()
    {
        $validator = Validator::make(request()->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->messages()], 400);
        }

        $credentials = request(['email', 'password']);

        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'Logout Successfully!'], 200);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        $newToken = auth('api')->refresh();
        return $this->respondWithToken($newToken);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        $user = auth('api')->setToken($token)->user();

        $siswa = null;
        if ($user && $user->role === 'siswa') {
            $siswa = Siswa::with(['kelas:id,nama_kelas'])
                ->select('id', 'nis', 'id_kelas')
                ->where('nama_siswa', $user->name)
                ->first();
        }

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'users' => $user,
            'siswa' => $user->role == 'siswa' ? $siswa : null
        ]);
    }

    public function gantiPassword()
    {
        $validator = Validator::make(request()->all(), [
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->messages()], 400);
        }

        $user = auth('api')->user();

        $update_password = User::where('id', $user->id)->update([
            'password' => bcrypt(request('password'))
        ]);

        if ($update_password) {
            return response()->json([
                'message' => 'Success!'
            ]);
        } else {
            return response()->json([
                'message' => 'Ganti password gagal!'
            ]);
        }
    }
}
