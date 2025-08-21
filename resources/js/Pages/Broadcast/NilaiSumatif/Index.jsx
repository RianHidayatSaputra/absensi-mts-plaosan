import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, useForm } from "@inertiajs/react"

const Index = ({auth}) => {

    const {data, setData, post, reset, processing} = useForm({
        file: ''
    })

    const importSpp = (e) => {
            e.preventDefault()
    
            post(route('broadcast.store'), {
                onSuccess: () => {
                    reset('file')
    
                    const fileInput = document.querySelector('input[type="file"]');
                    if (fileInput) {
                        fileInput.value = null;
                    }
                }
            })
        }
    
    return (
        <AuthenticatedLayout
            user={auth}
        >
            <Head title="User"/>

            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                  <div className="xl:col-span-2">
                     <div className="card h-full shadow mb-4 p-3">
                        <div className="border-b border-gray-300 px-5 py-4 mb-3">
                           <h4>Broadcast Nilai</h4>
                        </div>

                        <form onSubmit={(e) => importSpp(e)} className="flex ml-6 p-2" encType="multipart/form-data">
                            <input type="file" className="form-control p-1 border h-7" onChange={(e) => setData('file', e.target.files)} required/>
                            <button type="submit" disabled={processing} className="hover:bg-green-200 py-1 no-underline hover:text-gray-700 px-3 ml-3 mb-5 rounded text-black font-medium" style={{backgroundColor: "#4EE454"}}>Broadcast</button>
                        </form>

                     </div>
                  </div>
               </div>
        </AuthenticatedLayout>
    )
}

export default Index