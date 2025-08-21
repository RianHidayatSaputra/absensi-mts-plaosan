import InputError from "@/Components/InputError"
import SelectOption from "@/Components/SelectOption"
import TextInput from "@/Components/TextInput"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import {Link, useForm } from "@inertiajs/react"
import { useEffect } from "react"

const Edit = ({auth, guru, kontrakGuru}) => {

    let strHariKontrak = `${guru.kontrak_guru}`
    var arrHariKontrak = strHariKontrak.split(',')

    useEffect(() => {
        setData({
            nama: guru.nama,
            nuptk: guru.nuptk,
            jabatan: guru.jabatan,
            status_kepegawaian: guru.status_kepegawaian,
            alamat: guru.alamat,
            kontrak_guru: arrHariKontrak,
            no_kartu: guru.no_kartu,
            no_wa: guru.no_wa,
        })
    }, [])

    const {data, setData, put, errors, reset, processing} = useForm({
        nama: '',
        nuptk: '',
        jabatan: '',
        status_kepegawaian: '',
        alamat: '',
        kontrak_guru: [],
        no_kartu: '',
        no_wa: ''
    })

    const handleCheckboxChange = (e, val) => {
        const value = val.hari;
    
        if (e.target.checked) {

          setData('kontrak_guru', [...data.kontrak_guru, value]);

        } else {

          setData('kontrak_guru', data.kontrak_guru.filter((item) => item !== value));

        }

      };

    const handleSubmit = (e) => {
        e.preventDefault()

        put(route('guru.update', guru.id), {
            onSuccess: () => {
                reset('nama', 'nuptk', 'jabatan', 'status_kepegawaian', 'alamat', 'no_kartu', 'no_wa')
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
                                <TextInput
                                    type="text"
                                    placeholder="Nama"
                                    value={data.nama}
                                    onChange={(e) => setData('nama', e.target.value)}
                                />
                                <InputError
                                    message={errors.nama ?? ''}
                                    className="mt-2"
                                />
                                
                                <TextInput
                                    type="number"
                                    className='mt-3'
                                    placeholder="NUPTK"
                                    value={data.nuptk}
                                    onChange={(e) => setData('nuptk', e.target.value)}
                                />

                                <SelectOption 
                                    className="mt-3"
                                    onChange={(e) => setData('jabatan', e.target.value)}
                                    value={data.jabatan}
                                >
                                    <option value="">Pilih Jabatan</option>
                                    {data.jabatan == 'Kepala Madrasah' ? <option selected value="Kepala Madrasah">Kepala Madrasah</option> : <option value="Kepala Madrasah">Kepala Madrasah</option>}
                                    {data.jabatan == 'Waka Kurikulum' ? <option selected value="Waka Kurikulum">Waka Kurikulum</option> : <option value="Waka Kurikulum">Waka Kurikulum</option>}
                                    {data.jabatan == 'Waka Kesiswaan' ? <option selected value="Waka Kesiswaan">Waka Kesiswaan</option> : <option value="Waka Kesiswaan">Waka Kesiswaan</option>}
                                    {data.jabatan == 'Bendahara' ? <option selected value="Bendahara">Bendahara</option> : <option value="Bendahara">Bendahara</option>}
                                    {data.jabatan == 'Guru' ? <option selected value="Guru">Guru</option> : <option value="Guru">Guru</option>}
                                    {data.jabatan == 'Karyawan' ? <option selected value="Karyawan">Karyawan</option> : <option value="Karyawan">Karyawan</option>}
                                </SelectOption>
                                <InputError
                                    message={errors.jabatan ?? ''}
                                    className="mt-2"
                                />
                                
                                <SelectOption 
                                    className="mt-3"
                                    onChange={(e) => setData('status_kepegawaian', e.target.value)}
                                    value={data.status_kepegawaian}
                                >
                                    <option value="">Pilih Status Kepegawaian</option>
                                    {data.status_kepegawaian == 'GTY' ? <option selected value="GTY">GTY</option> : <option value="GTY">GTY</option>}
                                    {data.status_kepegawaian == 'GTT' ? <option selected value="GTT">GTT</option> : <option value="GTT">GTT</option>}
                                </SelectOption>
                                <InputError
                                    message={errors.status_kepegawaian ?? ''}
                                    className="mt-2"
                                />

                                <TextInput
                                    type="text"
                                    className='mt-3'
                                    placeholder="Alamat"
                                    value={data.alamat }
                                    onChange={(e) => setData('alamat', e.target.value)}
                                />
                                <InputError
                                    message={errors.alamat ?? ''}
                                    className="mt-2"
                                />

                                <label htmlFor="withLabel" className="mb-1 block text-gray-600 mt-3">Hari Kontrak Guru</label>
                                <div className="flex gap-4">
                                    {
                                        kontrakGuru.map((val, i) => {
                                            return <div className="form-check" key={i}>
                                                        <input 
                                                            className="form-check-input" 
                                                            type="checkbox" 
                                                            value={val.hari} 
                                                            id={i} 
                                                            checked={data.kontrak_guru.includes(val.hari)}
                                                            onChange={(e) => handleCheckboxChange(e, val)} 
                                                        />
                                                        <label className="form-check-label" htmlFor={i}>
                                                                {val.hari}
                                                        </label>
                                                    </div>
                                        })
                                    }
                                </div>

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

                                <TextInput
                                    type="text"
                                    placeholder="No WhatsApp"
                                    className="mt-3"
                                    value={data.no_wa}
                                    onChange={(e) => setData('no_wa', e.target.value)}
                                />
                                <InputError
                                    message={errors.no_wa ?? ''}
                                    className="mt-2 mb-3"
                                />

                                <div className={"flex justify-between " + (!errors.no_wa ? 'mt-3' : '')}>

                                    <Link href={route('guru.index')} className="bg-violet-300 hover:bg-violet-200 py-2 no-underline hover:text-gray-700 px-3 rounded text-black font-medium">Cancel</Link>

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