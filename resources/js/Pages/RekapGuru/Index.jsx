import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useCallback, useRef, useMemo, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import { DatePicker } from "antd";
import SelectOption from "@/Components/SelectOption";
const { RangePicker } = DatePicker;

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

const Index = ({ auth, rekapGuru, perPage: initialPerPage, gurus }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(rekapGuru.current_page);
    const [totalRows, setTotalRows] = useState(rekapGuru.total);
    const [perPage, setPerPage] = useState(initialPerPage || 10);
    const [filterText, setFilterText] = useState("");
    const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);
    const [loading, setLoading] = useState(true);
    const debounceTimeout = useRef(null);
    const { url } = usePage();
    // const [eror, setEror] = useState("");
    const datesRef = useRef([]);
    const idGuruRef = useRef("");

    const filteredItems = rekapGuru.data.filter(
        (item) =>
            item.guru.nama &&
            item.guru.nama
                .toLowerCase()
                .includes(debouncedFilterText.toLowerCase()),
    );

    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            setDebouncedFilterText(filterText);
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(debounceTimeout.current);
        };
    }, [filterText]);

    useEffect(() => {
        setTotalRows(rekapGuru.total);
    }, [rekapGuru]);

    const searchAbsent = (_) => {
        // setEror("");

        const formatted = _.map((date) => date.format("YYYY-MM-DD"));
        datesRef.current = formatted;
    };

    const exportExcel = (e) => {
        e.preventDefault();

        const exportDates = datesRef.current;
        const dataIdGuru = idGuruRef.current;
        // if (exportDates.length === 0) {
        //     setEror("Pilih tanggal dahulu!");
        //     return;
        // }

        window.open(
            route("export-excel/rekap-guru", {
                dates: exportDates,
                idGuru: dataIdGuru,
            }),
            "_self",
        );
    };

    const exportExcelExceptGuru = (e) => {
        e.preventDefault();

        window.open(route("export-excel/except-guru/rekap-guru"), "_self");
    };

    const columns = [
        {
            name: "#",
            cell: (row, index) => (currentPage - 1) * perPage + index + 1,
            maxwidth: "50px",
        },
        {
            name: "Nama Guru",
            selector: (row) => row.guru.nama,
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
        guru: {
            nama: (
                <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
            ),
        },
    }));

    const handleRowSelected = useCallback((state) => {
        setSelectedRows(state.selectedRows.map((row) => row.id));
    }, []);

    const contextActions = useMemo(() => {
        const deleteRekapGuru = (e, id) => {
            e.preventDefault();

            if (!window.confirm("Apakah kamu yakin akan menghapusnya?")) {
                return;
            }

            router.get(route("rekap-guru.destroy", [id]));
        };

        return (
            <button
                onClick={(e) => deleteRekapGuru(e, selectedRows)}
                className="bg-red-400 hover:bg-red-300 no-underline hover:text-gray-900 py-1 px-2 text-md ml-3 rounded text-black font-mediums"
            >
                Hapus
            </button>
        );
    }, [selectedRows]);

    const subHeaderComponentMemo = useMemo(() => {
        return (
            <div className="w-full -mb-6">
                <p className="text-red-400 italic text-start -mt-7 mb-3 text-xs">
                    *Jika ingin melakukan export, tanggal dan nama guru tidak
                    wajib diisi!
                </p>
                {auth.user.role == "admin" ? (
                    <div className="w-full flex justify-between">
                        <Link
                            href={route("rekap-guru.create")}
                            className="bg-violet-300 hover:bg-violet-200 no-underline hover:text-gray-700 pt-2 px-3 rounded text-black font-medium"
                        >
                            Tambah
                        </Link>

                        <FilterComponent
                            onFilter={(e) => setFilterText(e.target.value)}
                            filterText={filterText}
                        />
                    </div>
                ) : (
                    ""
                )}

                <div className="mt-3 w-full flex justify-end mb-3">
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

                    {auth.user.role == "admin" ? (
                        <SelectOption
                            className="h-10 w-44"
                            onChange={(e) => {
                                idGuruRef.current = e.target.value;
                            }}
                            defaultValue={""}
                        >
                            <option value="">Pilih Guru</option>
                            {gurus.map((val, i) => {
                                return (
                                    <option key={i} value={val.id}>
                                        {val.nama}
                                    </option>
                                );
                            })}
                        </SelectOption>
                    ) : (
                        ""
                    )}

                    {/* {url == "/rekap-semua-guru" ? (
                        <button
                            onClick={exportExcelExceptGuru}
                            className="bg-teal-400 hover:bg-teal-300 no-underline hover:text-gray-90 py-2 px-3 mb-5 ml-2 rounded text-black font-medium"
                        >
                            Export
                        </button>
                    ) : ( */}
                    <button
                        onClick={exportExcel}
                        className="bg-teal-400 hover:bg-teal-300 no-underline hover:text-gray-90 py-2 px-3 mb-5 ml-2 rounded text-black font-medium"
                    >
                        Export
                    </button>
                    {/* )} */}
                </div>
            </div>
        );
    }, [filterText]);
    // }, [filterText, eror]);

    const handlePageChange = (page) => {
        setLoading(true);

        router.get(
            route("rekap-guru.index", { page, perPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.rekapGuru.current_page);
                    setTotalRows(pageData.props.rekapGuru.total);
                    setLoading(false);
                },
            },
        );
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
        setLoading(true);

        router.get(
            route("rekap-guru.index", { page, perPage: newPerPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.rekapGuru.current_page);
                    setTotalRows(pageData.props.rekapGuru.total);
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
            <Head title="Rekap Guru" />

            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-4">
                        <DataTable
                            title="Rekap Guru"
                            columns={columns}
                            data={loading ? loadingSkeleton : filteredItems}
                            pagination
                            paginationServer
                            paginationTotalRows={totalRows}
                            paginationDefaultPage={currentPage}
                            onChangePage={handlePageChange}
                            onChangeRowsPerPage={handlePerRowsChange}
                            selectableRows={auth.user.role == "admin"}
                            contextActions={
                                auth.user.role == "admin"
                                    ? contextActions
                                    : null
                            }
                            onSelectedRowsChange={
                                auth.user.role == "admin"
                                    ? handleRowSelected
                                    : undefined
                            }
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
