import InputError from "@/Components/InputError"
import TextInput from "@/Components/TextInput"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import {Link, useForm } from "@inertiajs/react"
import { useEffect } from "react"

const Edit = ({auth, hariLibur}) => {

    useEffect(() => {
        setData({
            tanggal: hariLibur.tanggal,
            nama: hariLibur.nama
        })
    }, [])

    const {data, setData, put, errors, reset, processing} = useForm({
        tanggal: '',
        nama: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        put(route('hari-libur.update', hariLibur.id), {
            onSuccess: () => {
                reset('tanggal', 'nama')
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
                           <h4>Edit Hari Libur</h4>
                        </div>

                        <div className="relative overflow-x-auto mt-3 mb-4 ">
                            <form 
                                className="mx-5 grid md:w-2/5"
                                onSubmit={handleSubmit}
                            >
                                <TextInput
                                    type="date"
                                    placeholder="tanggal"
                                    value={data.tanggal}
                                    onChange={(e) => setData('tanggal', e.target.value)}
                                />
                                <InputError
                                    message={errors.tanggal ?? ''}
                                    className="mt-2"
                                />

                                <TextInput
                                    type="text"
                                    placeholder="Nama"
                                    className="mt-3"
                                    value={data.nama}
                                    onChange={(e) => setData('nama', e.target.value)}
                                />
                                <InputError
                                    message={errors.nama ?? ''}
                                    className="mt-2 mb-3"
                                />

                                <div className={"flex justify-between " + (!errors.nama ? 'mt-3' : '')}>

                                    <Link href={route('hari-libur.index')} className="bg-violet-300 hover:bg-violet-200 py-2 no-underline hover:text-gray-700 px-3 rounded text-black font-medium">Cancel</Link>

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