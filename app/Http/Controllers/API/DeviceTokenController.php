<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Guru;
use App\Models\Siswa;
use Illuminate\Http\Request;

class DeviceTokenController extends Controller
{
    public function updateDeviceToken(Request $req)
    {
        $user = auth('api')->user();

        if ($user->role == 'siswa') {
            Siswa::where('nama_siswa', $user->name)->update([
                'device_token' => $req->deviceToken
            ]);
        } else {
            Guru::where('nama', $user->name)->update([
                'device_token' => $req->deviceToken
            ]);
        }

        return response()->json([
            'message' => 'Success!'
        ]);
    }
}
