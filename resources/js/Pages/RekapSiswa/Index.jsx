import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import moment from "moment";
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

const Index = ({ auth, rekapSiswa, perPage: initialPerPage, kelas }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(rekapSiswa.current_page);
    const [totalRows, setTotalRows] = useState(rekapSiswa.total);
    const [perPage, setPerPage] = useState(initialPerPage || 10);
    // const [filterText, setFilterText] = useState("");
    // const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);
    const [loading, setLoading] = useState(true);
    // const debounceTimeout = useRef(null);
    const datesRef = useRef([]);
    const idKelasRef = useRef("");
    const [activeFilters, setActiveFilters] = useState({
        dates: [],
        kelas: "",
    });

    // const filteredItems = rekapSiswa.filter(
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
        setTotalRows(rekapSiswa.total);

        const tm = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(tm);
    }, [rekapSiswa]);

    const exportSiswa = (e) => {
        e.preventDefault();

        window.open(
            route("export-excel.rekap-siswa", {
                dates: datesRef.current,
                kelas: idKelasRef.current,
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
        const kelas = idKelasRef.current;

        setActiveFilters({ dates, kelas });
        setCurrentPage(1);

        setActiveFilters((prev) => ({
            ...prev,
            kelas,
        }));

        router.get(
            route("rekap-siswa.index"),
            {
                page: 1,
                perPage,
                dates,
                kelas,
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
            name: "Nama Siswa",
            selector: (row) => row.siswa.nama_siswa,
            sortable: true,
        },
        {
            name: "Absen Masuk",
            selector: (row) =>
                loading ? (
                    <div className="animate-pulse bg-gray-300 h-4 w-20 rounded"></div>
                ) : row.absen_masuk ? (
                    moment(row.absen_masuk, "HH:mm:ss").format("HH:mm")
                ) : (
                    "-"
                ),
            sortable: true,
        },
        {
            name: "Absen Pulang",
            selector: (row) =>
                loading ? (
                    <div className="animate-pulse bg-gray-300 h-4 w-28 rounded"></div>
                ) : row.absen_pulang ? (
                    moment(row.absen_pulang, "HH:mm:ss").format("HH:mm")
                ) : (
                    "-"
                ),
            sortable: true,
        },
        {
            name: "Tanggal",
            selector: (row) =>
                loading ? (
                    <div className="animate-pulse bg-gray-300 h-4 w-32 rounded"></div>
                ) : (
                    moment(row.created_at).format("YYYY-MM-DD")
                ),
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => row.status,
            cell: (row) =>
                loading ? (
                    <div className="animate-pulse bg-gray-300 h-4 w-36 rounded"></div>
                ) : (
                    <span
                        style={{ whiteSpace: "normal", wordWrap: "break-word" }}
                        className={
                            (row.status == "Belum Hadir"
                                ? "bg-yellow-500"
                                : row.status == "Belum Hadir dan Terlambat"
                                  ? "bg-orange-500"
                                  : row.status == "Hadir"
                                    ? "bg-teal-500"
                                    : row.status == "Hadir tapi Terlambat"
                                      ? "bg-teal-300"
                                      : row.status == "Tidak Hadir" ||
                                          row.status == "Tidak Absen"
                                        ? "bg-red-500"
                                        : "bg-cyan-700") +
                            " px-2 py-1 text-white text-sm font-medium rounded-md inline-block whitespace-nowrap text-center"
                        }
                    >
                        {row.status}
                    </span>
                ),
            width: "150px",
            sortable: true,
        },
    ];

    const loadingSkeleton = [...Array(perPage)].map((_, i) => ({
        id: `loading-${i}`,
        siswa: {
            nama_siswa: (
                <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
            ),
        },
    }));

    const handleRowSelected = useCallback((state) => {
        setSelectedRows(state.selectedRows.map((row) => row.id));
    }, []);

    const contextActions = useMemo(() => {
        const deleteRekapSiswa = (e, id) => {
            e.preventDefault();

            if (!window.confirm("Apakah kamu yakin akan menghapusnya?")) {
                return;
            }

            router.get(route("rekap-siswa.destroy", [id]));
        };

        return (
            <button
                onClick={(e) => deleteRekapSiswa(e, selectedRows)}
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
                    <Link
                        href={route("rekap-siswa.create")}
                        className="bg-violet-300 hover:bg-violet-200 no-underline h-10 hover:text-gray-700 pt-2 px-3 rounded text-black font-medium"
                    >
                        Tambah
                    </Link>

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
                                idKelasRef.current = e.target.value;
                            }}
                        >
                            <option value="">Pilih Kelas</option>
                            {kelas.map((val, i) => {
                                return (
                                    <option key={i} value={val.id}>
                                        {val.nama_kelas}
                                    </option>
                                );
                            })}
                        </SelectOption>

                        <button
                            onClick={handleSearch}
                            className="bg-indigo-600 h-9 hover:bg-indigo-500 ml-2 py-2 no-underline hover:text-gray-700 px-3 rounded text-white font-medium"
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>

                        <button
                            onClick={exportSiswa}
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
            route("rekap-siswa.index", {
                page,
                perPage,
                dates: activeFilters.dates,
                kelas: activeFilters.kelas,
            }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.rekapSiswa.current_page);
                    setTotalRows(pageData.props.rekapSiswa.total);
                    setLoading(false);
                },
            },
        );
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
        setLoading(true);

        router.get(
            route("rekap-siswa.index", {
                page,
                perPage: newPerPage,
                dates: activeFilters.dates,
                kelas: activeFilters.kelas,
            }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.rekapSiswa.current_page);
                    setTotalRows(pageData.props.rekapSiswa.total);
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
            <Head title="Rekap Siswa" />

            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-4">
                        <DataTable
                            title="Rekap Siswa"
                            columns={columns}
                            data={loading ? loadingSkeleton : rekapSiswa.data}
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
