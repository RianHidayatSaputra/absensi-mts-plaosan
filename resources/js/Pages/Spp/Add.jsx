import InputError from "@/Components/InputError"
import TextInput from "@/Components/TextInput"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import {Link, useForm } from "@inertiajs/react"
import { useState, useEffect } from "react"
import Select from "react-select"

const Add = ({auth, siswas}) => {
    const [selectedOptions, setSelectedOptions] = useState();
    const [listSiswa, setListSiswa] = useState();

    const [dataSpp, setDataSpp] = useState(() => {
        return JSON.parse(
            JSON.stringify([
                {
                    X: [
                        {
                            juli: null,
                            agustus: null,
                            september: null,
                            oktober: null,
                            november: null,
                            desember: null,
                            januari: null,
                            februari: null,
                            maret: null,
                            april: null,
                            mei: null,
                            juni: null,
                        }
                    ]
                },
                {
                    XI: [
                        {
                            juli: null,
                            agustus: null,
                            september: null,
                            oktober: null,
                            november: null,
                            desember: null,
                            januari: null,
                            februari: null,
                            maret: null,
                            april: null,
                            mei: null,
                            juni: null,
                        }
                    ]
                },
                {
                    XII: [
                        {
                            juli: null,
                            agustus: null,
                            september: null,
                            oktober: null,
                            november: null,
                            desember: null,
                            januari: null,
                            februari: null,
                            maret: null,
                            april: null,
                            mei: null,
                            juni: null,
                        }
                    ]
                }
            ])
        );
    });

    const {data, setData, post, errors, reset, processing} = useForm({
        id_siswa: '',
        nominal_spp: '',
        data_spp: JSON.stringify(dataSpp)
    })

    useEffect(() => {

        const formattedOptions = siswas.map(siswa => ({
            value: siswa.id, 
            label: siswa.nama_siswa 
        }));

        setListSiswa(formattedOptions);

        setData('data_spp', JSON.stringify(dataSpp));

    }, [dataSpp, siswas]);

    const handleSubmit = (e) => {
        e.preventDefault()

        post(route('spp.store'), {
            onSuccess: () => {
                reset('id_siswa', 'nominal_spp', 'data_spp')
                localStorage.setItem('pag', 10)
            }
        })
    }

    const handleSelect = (data) => {
        setSelectedOptions(data);
        setData('id_siswa', data.value)
    }

    const bayarSpp = (classKey, month, checked) => {
        setDataSpp(prevDataSpp => {
            return prevDataSpp.map(item => {
                const itemKey = Object.keys(item)[0];
                if (itemKey === classKey) {
                    return {
                        ...item,
                        [classKey]: item[classKey].map(monthData => ({
                            ...monthData,
                            [month]: checked ? 'lunas' : null
                        }))
                    };
                }
                return item;
            });
        });
    };

    return (
        <AuthenticatedLayout
            user={auth}
        >
            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                  <div className="xl:col-span-2">
                     <div className="card h-full shadow mb-4">
                        <div className="border-b border-gray-300 px-5 py-4 mb-3">
                           <h4>Siswa</h4>
                        </div>

                        <div className="relative overflow-x-auto mt-3 mb-4 ">
                            <form 
                                className="mx-5 grid md:w-2/5"
                                onSubmit={handleSubmit}
                            >

                                <Select
                                    options={listSiswa}
                                    placeholder="Pilih Siswa"
                                    value={selectedOptions}
                                    onChange={handleSelect}
                                    isSearchable={true}
                                    className="mb-3"
                                />
                                <InputError
                                    message={errors.id_siswa ?? ''}
                                    className="mb-3 -mt-1"
                                />

                                <TextInput
                                    type="number"
                                    placeholder="Nominal SPP"
                                    value={data.nominal_spp}
                                    onChange={(e) => setData('nominal_spp', e.target.value)}
                                />
                                <InputError
                                    message={errors.nominal_spp ?? ''}
                                    className="mt-2"
                                />
                                
                                <label className="my-2">Data SPP</label>
                                <div className="flex justify-between">
                                    {
                                        dataSpp.map((value, i) => {
                                            return Object.keys(value).map((key, j) => {
                                                return value[key].map((monthData, k) => {
                                                    return (
                                                        <div key={`${i}-${j}-${k}`}>
                                                            <h5>{key}</h5>
                                                            {
                                                                Object.keys(monthData).map((month, l) => (
                                                                    <p key={`${i}-${j}-${k}-${l}`}>
                                                                            <input
                                                                                type="checkbox"
                                                                                checked={monthData[month] === 'lunas'}
                                                                                onChange={(e) => bayarSpp(key, month, e.target.checked)}
                                                                                className="mr-2"
                                                                            />
                                                                            {month}: {monthData[month]}
                                                                    </p>
                                                                ))
                                                            }
                                                        </div>
                                                    );
                                                });
                                            });
                                        }) 
                                    }
                                </div>

                                <div className={"flex justify-between " + (!errors.data_spp ? 'mt-3' : '')}>

                                    <Link href={route('spp.index')} className="bg-violet-300 hover:bg-violet-200 py-2 no-underline hover:text-gray-700 px-3 rounded text-black font-medium">Cancel</Link>

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