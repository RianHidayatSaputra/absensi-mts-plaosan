import InputError from "@/Components/InputError"
import TextInput from "@/Components/TextInput"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import {Link, useForm } from "@inertiajs/react"

const Add = ({auth}) => {

    const {data, setData, post, errors, reset, processing} = useForm({
        nama_kelas: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        post(route('kelas.store'), {
            onSuccess: () => {
                reset('nama_kelas')
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
                           <h4>Tambah Kelas</h4>
                        </div>

                        <div className="relative overflow-x-auto mt-3 mb-4 ">
                            <form 
                                className="mx-5 grid md:w-2/5"
                                onSubmit={handleSubmit}
                            >
                                <TextInput
                                    type="text"
                                    placeholder="Nama Kelas"
                                    value={data.nama_kelas}
                                    onChange={(e) => setData('nama_kelas', e.target.value)}
                                />
                                <InputError
                                    message={errors.nama_kelas ?? ''}
                                    className="mt-2"
                                />

                                <div className={"flex justify-between " + (!errors.nama_kelas ? 'mt-3' : '')}>

                                    <Link href={route('kelas.index')} className="bg-violet-300 hover:bg-violet-200 py-2 no-underline hover:text-gray-700 px-3 rounded text-black font-medium">Cancel</Link>

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