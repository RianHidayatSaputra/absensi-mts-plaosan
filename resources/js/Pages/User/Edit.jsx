import InputError from "@/Components/InputError"
import SelectOption from "@/Components/SelectOption"
import TextInput from "@/Components/TextInput"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import {Link, useForm } from "@inertiajs/react"
import { useEffect } from "react"

const Edit = ({auth, user, gurus}) => {
    // console.log(siswa)

    useEffect(() => {
        setData({
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
        })
    }, [])

    const {data, setData, put, errors, reset, processing} = useForm({
        name: '',
        email: '',
        password: '',
        role: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        put(route('user.update', user.id), {
            onSuccess: () => {
                reset('name', 'email', 'password', 'role')
                localStorage.setItem('pag', 10)
            }
        })
    }

    return (
        <AuthenticatedLayout
            user={auth}
        >
            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                  <div className="xl:col-span-2">
                     <div className="card h-full shadow mb-4">
                        <div className="border-b border-gray-300 px-5 py-4 mb-3">
                           <h4>Edit User</h4>
                        </div>

                        <div className="relative overflow-x-auto mt-3 mb-4 ">
                            <form 
                                className="mx-5 grid md:w-2/5"
                                onSubmit={handleSubmit}
                            >
                                {/* <TextInput
                                    type="text"
                                    placeholder="Name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                <InputError
                                    message={errors.name ?? ''}
                                    className="mt-2"
                                /> */}
                                <SelectOption 
                                    className="mt-3"
                                    onChange={(e) => setData('name', e.target.value)}
                                    value={data.name}
                                    >
                                        <option value="">Pilih Nama</option>
                                        {
                                            data.name == 'admin' ? 
                                            (
                                                <>
                                                    <option selected value="admin">Admin</option>
                                                    {
                                                        gurus.map((val, i) => {
                                                            return <option key={i} value={val.nama}>{val.nama}</option>
                                                        })
                                                    }
                                                </>
                                            ) : (
                                                <>
                                                    <option value="admin">Admin</option>
                                                    {
                                                        gurus.map((val, i) => {
                                                            return <option value={val.nama}>{val.nama}</option> 
                                                        })
                                                    }
                                                </>
                                            )
                                            
                                        } 
                                        {
                                            gurus.map((val, i) => {
                                                data.name == val.nama ? <option selected value={val.nama}>{val.nama}</option> : <option value={val.nama}>{val.nama}</option>
                                            })
                                        }
                                </SelectOption>
                                <InputError
                                    message={errors.name ?? ''}
                                    className="mt-2 mb-3"
                                />

                                <TextInput
                                    type="email"
                                    placeholder="Email"
                                    className="mt-3"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError
                                    message={errors.email ?? ''}
                                    className="mt-2 mb-3"
                                />

                                <TextInput
                                    type="password"
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className={"mt-3"}
                                />
                                <InputError
                                    message={errors.password ?? ''}
                                    className="mt-2"
                                />

                                <SelectOption 
                                    className="mt-3"
                                    onChange={(e) => setData('role', e.target.value)}
                                    value={data.role}
                                    >
                                        <option value="">Pilih Role</option>
                                        {data.role == 'admin' ? <option selected value="admin">Admin</option> : <option value="admin">Admin</option>}
                                        {data.role == 'kepala madrasah' ? <option selected value="kepala madrasah">Kepala Madrasah</option> : <option value="kepala madrasah">Kepala Madrasah</option>}
                                        {data.role == 'kurikulum' ? <option selected value="kurikulum">Kurikulum</option> : <option value="kurikulum">Kurikulum</option>}
                                        {data.role == 'kesiswaan' ? <option selected value="kesiswaan">Kesiswaan</option> : <option value="kesiswaan">Kesiswaan</option>}
                                        {data.role == 'bendahara' ? <option selected value="bendahara">Bendahara</option> : <option value="bendahara">Bendahara</option>}
                                        {data.role == 'guru' ? <option selected value="guru">Guru</option> : <option value="guru">Guru</option>}
                                        {data.role == 'karyawan' ? <option selected value="karyawan">Karyawan</option> : <option value="karyawan">Karyawan</option>}
                                </SelectOption>
                                <InputError
                                    message={errors.role ?? ''}
                                    className="mt-2 mb-3"
                                />

                                <div className={"flex justify-between " + (!errors.role ? 'mt-4' : '')}>

                                    <Link href={route('user.index')} className="bg-violet-300 hover:bg-violet-200 py-2 no-underline hover:text-gray-700 px-3 rounded text-black font-medium">Cancel</Link>

                                    <button type="submit" disabled={processing} className="bg-blue-600 hover:bg-blue-500 py-2 no-underline hover:text-gray-700 px-3 rounded text-white font-medium ">Update</button>

                                </div>
                            </form>
                        </div>
                     </div>
                  </div>
               </div>
        </AuthenticatedLayout>
    )
}  

export default Edit