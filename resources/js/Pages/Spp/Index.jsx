import Pagination from "@/Components/Pagination";
import SelectOption from "@/Components/SelectOption";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    faCircleCheck,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import moment from "moment";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import DataTable from "react-data-table-component";

const FilterComponent = ({ filterText, onFilter }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            id="search"
            ref={inputRef}
            type="text"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
    );
};

const Index = ({ auth, spp, count_spp, perPage: initialPerPage }) => {
    // const [search, setSearch] = useState('')
    // const [loading, setLoading] = useState(true)
    // const {url} = usePage()

    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(spp.current_page);
    const [totalRows, setTotalRows] = useState(spp.total);
    const [perPage, setPerPage] = useState(initialPerPage || 10);

    const [filterText, setFilterText] = useState("");
    const filteredItems = spp.data.filter(
        (item) =>
            (item.siswa.nama_siswa &&
                item.siswa.nama_siswa
                    .toLowerCase()
                    .includes(filterText.toLowerCase())) ||
            item.siswa.nis.toLowerCase().includes(filterText.toLowerCase()),
    );

    useEffect(() => {
        setTotalRows(spp.total);
    }, [spp]);

    const columns = [
        {
            name: "#",
            cell: (row, index) => (currentPage - 1) * perPage + index + 1,
            maxwidth: "20px",
        },
        {
            name: "Nama Siswa",
            selector: (row) => row.siswa.nama_siswa,
            sortable: true,
            maxwidth: "130px",
        },
        {
            name: "NIS",
            selector: (row) => row.siswa.nis,
            sortable: true,
            maxwidth: "20px",
        },
        {
            name: "Kelas",
            selector: (row) => row.siswa.kelas,
            sortable: true,
            maxwidth: "20px",
        },
        {
            name: "Nominal SPP",
            selector: (row) => row.nominal_spp,
            sortable: true,
            maxwidth: "50px",
        },
        {
            name: "Data SPP",
            cell: (row) => {
                const dataParse = JSON.parse(row.data_spp);

                return (
                    <div className="flex justify-between">
                        {dataParse.map((classData, classIndex) => {
                            const className = Object.keys(classData)[0];
                            const monthsData = classData[className];

                            return (
                                <div key={classIndex}>
                                    <h5>{className}</h5>
                                    {monthsData.map((monthData, monthIndex) => (
                                        <div key={monthIndex}>
                                            {Object.keys(monthData).map(
                                                (month, key) => (
                                                    <p key={key}>
                                                        {monthData[month] !=
                                                        null ? (
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faCircleCheck
                                                                }
                                                                className="mr-2 text-green-500"
                                                            />
                                                        ) : (
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faCircleXmark
                                                                }
                                                                className="mr-2 text-red-500"
                                                            />
                                                        )}
                                                        {month}:{" "}
                                                        {monthData[month]}
                                                    </p>
                                                ),
                                            )}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                );
            },
            maxwidth: "700px",
        },
        {
            name: "Aksi",
            cell: (row) => (
                <Link
                    href={route("spp.edit", row.id)}
                    className="bg-yellow-400 hover:bg-yellow-300 text-sm no-underline hover:text-gray-900 py-1 px-2 rounded text-black font-medium"
                >
                    Edit
                </Link>
            ),
            maxwidth: "20px",
        },
    ];

    const handleRowSelected = useCallback((state) => {
        setSelectedRows(state.selectedRows.map((row) => row.id));
    }, []);

    const contextActions = useMemo(() => {
        const deleteSpp = (e, id) => {
            e.preventDefault();

            if (!window.confirm("Apakah kamu yakin akan menghapusnya?")) {
                return;
            }

            router.get(route("spp.destroy", [id]));
        };

        return (
            <button
                onClick={(e) => deleteSpp(e, selectedRows)}
                className="bg-red-400 hover:bg-red-300 no-underline hover:text-gray-900 py-1 px-2 text-md ml-3 rounded text-black font-mediums"
            >
                Hapus
            </button>
        );
    }, [selectedRows]);

    const subHeaderComponentMemo = useMemo(() => {
        return (
            <div className="w-full flex justify-between">
                <Link
                    href={route("spp.create")}
                    className="bg-violet-300 hover:bg-violet-200 no-underline hover:text-gray-700 pt-2 px-3 rounded text-black font-medium"
                >
                    Tambah
                </Link>

                <FilterComponent
                    onFilter={(e) => setFilterText(e.target.value)}
                    filterText={filterText}
                />
            </div>
        );
    }, [filterText]);

    const handlePageChange = (page) => {
        router.get(
            route("spp.index", { page, perPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.spp.current_page);
                    setTotalRows(pageData.props.spp.total);
                },
            },
        );
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
        router.get(
            route("spp.index", { page, perPage: newPerPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.spp.current_page);
                    setTotalRows(pageData.props.spp.total);
                },
            },
        );
    };

    const paginationComponentOptions = {
        rowsPerPageText: "Count Rows",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Semua",
    };

    // const changePaginate = (paginate) => {

    //     if(url == '/spp' || url == '/spp?paginate='+localStorage.getItem('pag') || url == '/spp?page='+localStorage.getItem('pageAct')+'&paginate='+localStorage.getItem('pag')) {

    //         router.get(route('spp.index'), { paginate })
    //         localStorage.setItem('pag',paginate)
    //     }

    // }

    // var no = localStorage.getItem('pag') * spp.current_page - localStorage.getItem('pag') + 1

    // const deleteSpp = (e, id) => {
    //     e.preventDefault()

    //     if(!window.confirm("Apakah kamu yakin akan menghapusnya?")) {
    //         return
    //     }

    //     router.delete(route('spp.destroy', id))
    //     localStorage.setItem('pag', 10)
    // }

    // const {data, setData, post, reset, processing} = useForm({
    //     file: ''
    // })

    // const importSpp = (e) => {
    //     e.preventDefault()

    //     post(route('import-spp'), {
    //         onSuccess: () => {
    //             reset('file')

    //             const fileInput = document.querySelector('input[type="file"]');
    //             if (fileInput) {
    //                 fileInput.value = null;
    //             }
    //         }
    //     })
    // }

    // setTimeout(() => {
    //     setLoading(false)
    // }, 2000);
    // console.log("data spp =>", spp)
    return (
        <AuthenticatedLayout user={auth}>
            <Head title="Hari Libur" />

            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-4">
                        <DataTable
                            title="SPP"
                            columns={columns}
                            data={filteredItems}
                            pagination
                            paginationServer
                            paginationTotalRows={totalRows}
                            paginationDefaultPage={currentPage}
                            onChangePage={handlePageChange}
                            onChangeRowsPerPage={handlePerRowsChange}
                            selectableRows
                            contextActions={contextActions}
                            onSelectedRowsChange={handleRowSelected}
                            responsive
                            highlightOnHover
                            striped
                            subHeader
                            subHeaderComponent={subHeaderComponentMemo}
                            paginationComponentOptions={
                                paginationComponentOptions
                            }
                        />

                        {/* <div className="border-b border-gray-300 px-5 py-4 mb-3">
                           <h4>SPP</h4>
                        </div>
                        <div className="flex">
                            <Link href={route('spp.create')} className="bg-violet-300 hover:bg-violet-200 py-2 h-9 no-underline hover:text-gray-700 px-3 mx-5 mb-5 rounded text-black font-medium">Tambah</Link>
                            <SelectOption 
                                className="pr-7 h-10"
                                onChange={(e) => changePaginate(e.target.value)}
                                defaultValue={localStorage.getItem('pag')}
                                >
                                    {localStorage.getItem('pag') == 10 ? <option value="10">10</option> : <option value="10">10</option>}
                                    {localStorage.getItem('pag') == 25 ? <option value="25">25</option> : <option value="25">25</option>}
                                    {localStorage.getItem('pag') == 50 ? <option value="50">50</option> : <option value="50">50</option>}
                                    {localStorage.getItem('pag') == 100 ? <option value="100">100</option> : <option value="100">100</option>}
                                    {localStorage.getItem('pag') == count_spp ? <option value={count_spp ?? 0}>Semua</option> : <option value={count_spp ?? 0}>Semua</option>}
                            </SelectOption>
                            <TextInput
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search Data SPP..."
                                className="ml-4 h-10"
                                type='search'
                            />
                            <form onSubmit={(e) => importSpp(e)} className="flex ml-6 p-2" encType="multipart/form-data">
                                <input type="file" className="form-control border h-7" onChange={(e) => setData('file', e.target.files)} required/>
                                <button type="submit" disabled={processing} className="hover:bg-green-200 py-1 no-underline hover:text-gray-700 px-3 ml-3 mb-5 rounded text-black font-medium" style={{backgroundColor: "#4EE454"}}>Import</button>
                            </form>
                        </div>

                        <div className="relative overflow-x-auto mt-3 mb-4">
                            {
                                loading 
                                ?
                                    <div className="flex justify-center">
                                        <div className="loadingio-spinner-radio-2by998twmg8">
                                            <div className="ldio-yzaezf3dcmj">

                                                <div>
                                                </div>

                                                <div>
                                                </div>

                                                <div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                :
                                    <table className="text-left w-full whitespace-nowrap">
                                        <thead className="text-gray-700">
                                        <tr>
                                            <th scope="col" className="border-b bg-gray-100 pl-6 py-3">#</th>
                                            <th scope="col" className="border-b bg-gray-100 py-3">Nama Siswa</th>
                                            <th scope="col" className="border-b bg-gray-100 py-3">NIS</th>
                                            <th scope="col" className="border-b bg-gray-100 py-3">Kelas</th>
                                            <th scope="col" className="border-b bg-gray-100 py-3">Nominal SPP</th>
                                            <th scope="col" className="border-b bg-gray-100 py-3">Data SPP</th>
                                            <th scope="col" className="border-b bg-gray-100 py-3">Updated At</th>
                                            <th scope="col" className="border-b bg-gray-100 py-3">Aksi</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            spp.data.filter((val) => val.siswa && val.siswa.nis && val.siswa.nis.toLowerCase().includes(search) || val.siswa && val.siswa.nama_siswa && val.siswa.nama_siswa.toLowerCase().includes(search)).map((value, key) => {
                                                // console.log("value spp =>", value)
                                                let dataParse = JSON.parse(value.data_spp)

                                                return <tr key={key}>
                                                            <td className="border-b border-gray-300 font-medium py-4 px-6 text-left">
                                                                {no++}
                                                            </td>
                                                            <td className="border-b border-gray-300 font-medium py-4 text-left">
                                                                <h5 className="mb-1">{value.siswa.nama_siswa}</h5>
                                                            </td>
                                                            <td className="border-b border-gray-300 font-medium py-4 text-left">
                                                                <h5 className="mb-1">{value.siswa.nis}</h5>
                                                            </td>
                                                            <td className="border-b border-gray-300 font-medium py-4 text-left">{value.siswa.kelas}</td>
                                                            <td className="border-b border-gray-300 font-medium py-4 text-left">{value.nominal_spp}</td>
                                                            <td className="border-b border-gray-300 font-medium py-4 text-left flex justify-between">
                                                            {
                                                                    dataParse.map((classData, classIndex) => {
                                                                        const className = Object.keys(classData)[0];
                                                                        const monthsData = classData[className];

                                                                        return (
                                                                            <div key={classIndex}>
                                                                                <h5>{className}</h5>
                                                                                {
                                                                                    monthsData.map((monthData, monthIndex) => (
                                                                                        <div key={monthIndex}>
                                                                                            {
                                                                                                Object.keys(monthData).map((month, key) => (
                                                                                                    <p key={key}>
                                                                                                        {monthData[month] != null ? <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-green-500" /> : <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-red-500"/>}
                                                                                                        {month}: {monthData[month]}
                                                                                                    </p>
                                                                                                ))
                                                                                            }
                                                                                        </div>
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                        );
                                                                    })
                                                                }
                                                            </td>
                                                            <td className="border-b border-gray-300 font-medium py-4 text-left">{moment(value.updated_at).format("YYYY-MM-DD")}</td>
                                                            <td className="border-b border-gray-300 font-medium py-4 text-left ">
                                                                <div >
                                                                    <Link href={route('spp.edit', value.id)} className="bg-yellow-400 hover:bg-yellow-300 text-sm no-underline hover:text-gray-900 py-1 px-2 mb-5 rounded text-black font-medium">Edit</Link>
                                                                    
                                                                    <button onClick={(e) => deleteSpp(e, value.id)} className="bg-red-400 hover:bg-red-300 no-underline hover:text-gray-900 py-1 px-2 text-sm ml-3 rounded text-black font-mediums">Hapus</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                            })
                                        }
                                        </tbody>
                                    </table>
                            }
                           
                        </div>
                        <Pagination links={spp.links} className="mt-4"/> */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
