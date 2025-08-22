import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
// import moment from "moment";
import DataTable from "react-data-table-component";
import SelectOption from "@/Components/SelectOption";
import { DatePicker } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const { RangePicker } = DatePicker;

// const FilterComponent = ({ filterText, onFilter }) => {
//     const inputRef = useRef(null);

//     useEffect(() => {
//         if (inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, []);

//     return (
//         <input
//             id="search"
//             ref={inputRef}
//             type="text"
//             placeholder="Filter By Name"
//             aria-label="Search Input"
//             value={filterText}
//             onChange={onFilter}
//         />
//     );
// };

const Index = ({ auth, alumnis, perPage: initialPerPage }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(alumnis.current_page);
    const [totalRows, setTotalRows] = useState(alumnis.total);
    const [perPage, setPerPage] = useState(initialPerPage || 10);
    // const [filterText, setFilterText] = useState("");
    // const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);
    const [loading, setLoading] = useState(true);
    // const debounceTimeout = useRef(null);
    const datesRef = useRef([]);
    const tahunMasukRef = useRef("");
    const [activeFilters, setActiveFilters] = useState({
        dates: [],
        tahun_masuk: "",
    });

    // const filteredItems = alumnis.filter(
    //     (item) =>
    //         item.siswa.nama_siswa &&
    //         item.siswa.nama_siswa
    //             .toLowerCase()
    //             .includes(debouncedFilterText.toLowerCase()),
    // );

    // useEffect(() => {
    //     if (debounceTimeout.current) {
    //         clearTimeout(debounceTimeout.current);
    //     }

    //     debounceTimeout.current = setTimeout(() => {
    //         // setDebouncedFilterText(filterText);
    //         setLoading(false);
    //     }, 500);

    //     return () => {
    //         clearTimeout(debounceTimeout.current);
    //     };
    // }, [filterText]);
    useEffect(() => {
        setTotalRows(alumnis.total);

        const tm = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(tm);
    }, [alumnis]);

    const exportAlumni = (e) => {
        e.preventDefault();

        window.open(
            route("export-excel.rekap-alumni", {
                dates: datesRef.current,
                tahun_masuk: tahunMasukRef.current,
            }),
            "_self",
        );
    };

    const searchAbsent = (_) => {
        if (Array.isArray(_) && _.length === 2 && _[0] && _[1]) {
            const formatted = _.map((date) => date.format("YYYY-MM-DD"));
            datesRef.current = formatted;

            setActiveFilters((prev) => ({
                ...prev,
                dates: formatted,
            }));
        } else {
            datesRef.current = null;

            setActiveFilters((prev) => ({
                ...prev,
                dates: null,
            }));
        }
    };

    const handleSearch = () => {
        const dates = datesRef.current;
        const tahun_masuk = tahunMasukRef.current;

        setActiveFilters({ dates, tahun_masuk });
        setCurrentPage(1);

        setActiveFilters((prev) => ({
            ...prev,
            tahun_masuk,
        }));

        router.get(
            route("pindah-kelas.index"),
            {
                page: 1,
                perPage,
                dates,
                tahun_masuk,
            },
            {
                preserveState: true,
                replace: true,
            },
        );
    };

    const columns = [
        {
            name: "#",
            cell: (row, index) => (currentPage - 1) * perPage + index + 1,
            width: "80px",
        },
        {
            name: "NIS",
            selector: (row) => row.nis,
            sortable: true,
        },
        {
            name: "Nama Siswa",
            selector: (row) => row.nama_siswa,
            sortable: true,
        },
        {
            name: "Nama Ortu",
            selector: (row) => row.nama_ortu,
            sortable: true,
        },
        {
            name: "No Ortu",
            selector: (row) => row.no_ortu,
            sortable: true,
        },
        {
            name: "Tahun Masuk",
            selector: (row) => row.tahun_masuk,
            sortable: true,
        },
    ];

    const loadingSkeleton = [...Array(perPage)].map((_, i) => ({
        id: `loading-${i}`,
        alumnis: {
            nama_siswa: (
                <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
            ),
        },
    }));

    const handleRowSelected = useCallback((state) => {
        setSelectedRows(state.selectedRows.map((row) => row.id));
    }, []);

    const contextActions = useMemo(() => {
        const deleteAlumnis = (e, id) => {
            e.preventDefault();

            if (!window.confirm("Apakah kamu yakin akan menghapusnya?")) {
                return;
            }

            router.get(route("pindah-kelas.destroy", [id]));
        };

        return (
            <button
                onClick={(e) => deleteAlumnis(e, selectedRows)}
                className="bg-red-400 hover:bg-red-300 no-underline hover:text-gray-900 py-1 px-2 text-md ml-3 rounded text-black font-mediums"
            >
                Hapus
            </button>
        );
    }, [selectedRows]);

    const subHeaderComponentMemo = useMemo(() => {
        return (
            <div className="w-full">
                <div className="w-full flex justify-between">
                    {/* <Link
                        href={route("pindah-kelas.create")}
                        className="bg-violet-300 hover:bg-violet-200 no-underline h-10 hover:text-gray-700 pt-2 px-3 rounded text-black font-medium"
                    >
                        Tambah
                    </Link> */}

                    {/* <FilterComponent
                        onFilter={(e) => setFilterText(e.target.value)}
                        filterText={filterText}
                    /> */}

                    <div className=" w-full flex justify-end">
                        <div>
                            <RangePicker
                                onChange={(_) => searchAbsent(_)}
                                className="mr-3 p-2"
                            />
                            {/* {eror && (
                            <p className="italic text-red-400 mt-1 text-start">
                                {eror}
                            </p>
                        )} */}
                        </div>

                        <SelectOption
                            className="h-10"
                            onChange={(e) => {
                                tahunMasukRef.current = e.target.value;
                            }}
                        >
                            <option value="">Tahun Masuk</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                        </SelectOption>

                        <button
                            onClick={handleSearch}
                            className="bg-indigo-600 h-9 hover:bg-indigo-500 ml-2 py-2 no-underline hover:text-gray-700 px-3 rounded text-white font-medium"
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>

                        <button
                            onClick={exportAlumni}
                            className="bg-teal-400 hover:bg-teal-300 no-underline hover:text-gray-90 py-2 px-3 mb-5 ml-2 rounded text-black font-medium"
                        >
                            Export
                        </button>
                    </div>
                </div>
            </div>
        );
    }, []);
    // }, [filterText]);

    const handlePageChange = (page) => {
        setLoading(true);

        router.get(
            route("pindah-kelas.index", {
                page,
                perPage,
                dates: activeFilters.dates,
                tahun_masuk: activeFilters.tahun_masuk,
            }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.alumnis.current_page);
                    setTotalRows(pageData.props.alumnis.total);
                    setLoading(false);
                },
            },
        );
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
        setLoading(true);

        router.get(
            route("pindah-kelas.index", {
                page,
                perPage: newPerPage,
                dates: activeFilters.dates,
                tahun_masuk: activeFilters.tahun_masuk,
            }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.alumnis.current_page);
                    setTotalRows(pageData.props.alumnis.total);
                    setLoading(false);
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

    return (
        <AuthenticatedLayout user={auth}>
            <Head title="Alumni" />

            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-4">
                        <DataTable
                            title="Alumni"
                            columns={columns}
                            data={loading ? loadingSkeleton : alumnis.data}
                            // data={loading ? loadingSkeleton : filteredItems}
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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
