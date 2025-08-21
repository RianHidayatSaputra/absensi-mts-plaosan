import InputError from "@/Components/InputError"
import SelectOption from "@/Components/SelectOption"
import TextInput from "@/Components/TextInput"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import {Link, useForm } from "@inertiajs/react"
import { useEffect } from "react"

const Edit = ({auth, rekapGuru, gurus}) => {

    useEffect(() => {
        setData({
            nama: rekapGuru?.nama || '',
            absen_masuk: rekapGuru?.absen_masuk || '',
            absen_pulang: rekapGuru?.absen_pulang || '',
            status: rekapGuru?.status || '',
        })
    }, [])

    const {data, setData, put, errors, reset, processing} = useForm({
        nama: '',
        absen_masuk: '',
        absen_pulang: '',
        status: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        put(route('rekap-guru.update', rekapGuru.id), {
            onSuccess: () => {
                reset('nama', 'absen_masuk', 'absen_pulang', 'status')
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
                           <h4>Edit Guru</h4>
                        </div>

                        <div className="relative overflow-x-auto mt-3 mb-4 ">
                            <form 
                                className="mx-5 grid md:w-2/5"
                                onSubmit={handleSubmit}
                            >

                                <label htmlFor="withLabel" className="mb-1 block text-gray-600 mt-2">Nama Guru</label>
                                <SelectOption 
                                    onChange={(e) => setData('nama', e.target.value)}
                                    value={data.nama}
                                    >
                                        <option value="">Pilih Guru</option>
                                        {
                                            gurus.map((val, i) => {
                                                return data.nama == val.nama ? <option key={i} selected value={val.nama}>{val.nama}</option> : <option key={i} value={val.nama}>{val.nama}</option>
                                            })
                                        }
                                </SelectOption>
                                <InputError
                                    message={errors.nama ?? ''}
                                    className="mt-2"
                                />

                                <label htmlFor="withLabel" className="mb-1 block text-gray-600 mt-3">Absen Masuk</label>
                                <TextInput
                                    type="time"
                                    value={data.absen_masuk}
                                    onChange={(e) => setData('absen_masuk', e.target.value)}
                                />

                                <label htmlFor="withLabel" className="mb-1 block text-gray-600 mt-3">Absen Pulang</label>
                                <TextInput
                                    type="time"
                                    value={data.absen_pulang}
                                    onChange={(e) => setData('absen_pulang', e.target.value)}
                                />

                                <label htmlFor="withLabel" className="mb-1 block text-gray-600 mt-3">Status</label>
                                <SelectOption 
                                    onChange={(e) => setData('status', e.target.value)}
                                    value={data.status}
                                    >
                                        <option value="">Pilih Status</option>
                                        <option value="Belum Hadir">Belum Hadir</option>
                                        <option value="Belum Hadir dan Terlambat">Belum Hadir dan Terlambat</option>
                                        <option value="Hadir">Hadir</option>
                                        <option value="Hadir tapi Terlambat">Hadir tapi Terlambat</option>
                                        <option value="Tidak Hadir">Tidak Hadir</option>
                                </SelectOption>
                                <InputError
                                    message={errors.status ?? ''}
                                    className="mt-2 mb-3"
                                />

                                <div className={"flex justify-between " + (!errors.status ? 'mt-3' : '')}>

                                    <Link href={route('rekap-guru.index')} className="bg-violet-300 hover:bg-violet-200 py-2 no-underline hover:text-gray-700 px-3 rounded text-black font-medium">Cancel</Link>

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