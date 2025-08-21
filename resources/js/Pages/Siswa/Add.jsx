import InputError from "@/Components/InputError"
import SelectOption from "@/Components/SelectOption"
import TextInput from "@/Components/TextInput"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import {Link, useForm } from "@inertiajs/react"

const Add = ({auth, kelas}) => {

    const {data, setData, post, errors, reset, processing} = useForm({
        nis: '',
        nama_siswa: '',
        id_kelas: '',
        no_kartu: '',
        nama_ortu: '',
        no_ortu: '',
        tahun_masuk: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        post(route('siswa.store'), {
            onSuccess: () => {
                reset('nama_siswa', 'nis', 'no_kartu', 'id_kelas', 'nama_ortu', 'no_ortu', 'tahun_masuk')
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
                           <h4>Tambah Siswa</h4>
                        </div>

                        <div className="relative overflow-x-auto mt-3 mb-4 ">
                            <form 
                                className="mx-5 grid md:w-2/5"
                                onSubmit={handleSubmit}
                            >
                                <TextInput
                                    type="text"
                                    placeholder="Nama Siswa"
                                    value={data.nama_siswa}
                                    onChange={(e) => setData('nama_siswa', e.target.value)}
                                />
                                <InputError
                                    message={errors.nama_siswa ?? ''}
                                    className="mt-2"
                                />

                                <TextInput
                                    type="text"
                                    placeholder="Nis"
                                    className="mt-3"
                                    value={data.nis}
                                    onChange={(e) => setData('nis', e.target.value)}
                                />
                                <InputError
                                    message={errors.nis ?? ''}
                                    className="mt-2 mb-3"
                                />

                                <TextInput
                                    type="text"
                                    placeholder="No Kartu"
                                    value={data.no_kartu}
                                    onChange={(e) => setData('no_kartu', e.target.value)}
                                    className={!errors.no_kartu ? ' mt-3 ' : ''}
                                />
                                <InputError
                                    message={errors.no_kartu ?? ''}
                                    className="mt-2"
                                />

                                <SelectOption 
                                    className="mt-3"
                                    onChange={(e) => setData('id_kelas', e.target.value)}
                                    defaultValue={""}
                                >
                                    <option value="">Pilih Kelas</option>
                                    {
                                        kelas.map((val, i) => {
                                            return <option key={i} value={val.id}>{val.nama_kelas}</option>
                                        })
                                    }
                                </SelectOption>
                                <InputError
                                    message={errors.id_kelas ?? ''}
                                    className="mt-2 mb-3"
                                />
                                
                                <TextInput
                                    type="text"
                                    placeholder="Nama Orang Tua"
                                    className={!errors.nama_ortu ? 'mt-3' : ''}
                                    value={data.nama_ortu}
                                    onChange={(e) => setData('nama_ortu', e.target.value)}
                                />
                                <InputError
                                    message={errors.nama_ortu ?? ''}
                                    className="mt-2 mb-3"
                                />

                                <TextInput
                                    type="text"
                                    placeholder="Nomor Orang Tua"
                                    className={!errors.no_ortu ? 'mt-3' : ''}
                                    value={data.no_ortu}
                                    onChange={(e) => setData('no_ortu', e.target.value)}
                                />
                                <InputError
                                    message={errors.no_ortu ?? ''}
                                    className="mt-2 mb-3"
                                />
                                
                                <TextInput
                                    type="text"
                                    placeholder="Tahun Masuk"
                                    className={!errors.no_ortu ? 'mt-3' : ''}
                                    value={data.tahun_masuk}
                                    onChange={(e) => setData('tahun_masuk', e.target.value)}
                                />
                                <InputError
                                    message={errors.tahun_masuk ?? ''}
                                    className="mt-2 mb-3"
                                />

                                <div className={"flex justify-between " + (!errors.tahun_masuk ? 'mt-3' : '')}>

                                    <Link href={route('siswa.index')} className="bg-violet-300 hover:bg-violet-200 py-2 no-underline hover:text-gray-700 px-3 rounded text-black font-medium">Cancel</Link>

                                    <button type="submit" disabled={processing} className="bg-blue-600 hover:bg-blue-500 py-2 no-underline hover:text-gray-700 px-3 rounded text-white font-medium ">Submit</button>

                                </div>
                            </form>
                        </div>
                     </div>
                  </div>
               </div>
        </AuthenticatedLayout>
    )
}  

export default Add