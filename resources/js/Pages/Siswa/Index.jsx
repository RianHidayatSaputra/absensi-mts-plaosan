import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useMemo, useState, useCallback, useEffect, useRef } from "react";
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

const ImportFormSiswa = () => {
    const { data, setData, post, reset, processing } = useForm({
        file: "",
    });

    const importSiswa = (e) => {
        e.preventDefault();

        post(route("import-siswa"), {
            onSuccess: () => {
                reset("file");

                const fileInput = document.querySelector('input[type="file"]');
                if (fileInput) {
                    fileInput.value = null;
                }
            },
        });
    };

    return (
        <form
            method="post"
            onSubmit={(e) => importSiswa(e)}
            className="flex p-2"
            encType="multipart/form-data"
        >
            <input
                type="file"
                className="form-control border h-6"
                onChange={(e) => setData("file", e.target.files[0])}
                required
            />
            <button
                type="submit"
                disabled={processing}
                className="hover:bg-green-200 py-1 no-underline hover:text-gray-700 px-2 ml-3 mb-5 rounded text-black text-sm font-medium"
                style={{ backgroundColor: "#4EE454" }}
            >
                Import
            </button>
        </form>
    );
};

const Index = ({ auth, siswa, perPage: initialPerPage }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(siswa.current_page);
    const [totalRows, setTotalRows] = useState(siswa.total);
    const [perPage, setPerPage] = useState(initialPerPage || 10);
    const [filterText, setFilterText] = useState("");
    const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);
    const [loading, setLoading] = useState(true);
    const debounceTimeout = useRef(null);

    const filteredItems = siswa.data.filter(
        (item) =>
            item.nama_siswa &&
            item.nama_siswa
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
        setTotalRows(siswa.total);
    }, [siswa]);

    const columns = [
        {
            name: "#",
            cell: (row, index) => (currentPage - 1) * perPage + index + 1,
            maxwidth: "50px",
        },
        {
            name: "Nama Siswa",
            selector: (row) => row.nama_siswa,
            cell: (row) => (
                <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                    {row.nama_siswa}
                </div>
            ),
            sortable: true,
            width: "200px",
        },
        {
            name: "NIS",
            selector: (row) => row.nis,
            sortable: true,
        },
        {
            name: "Kelas",
            selector: (row) => row.kelas.nama_kelas,
            sortable: true,
        },
        {
            name: "Nama Ortu",
            selector: (row) => row.nama_ortu,
            cell: (row) => (
                <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                    {row.nama_ortu}
                </div>
            ),
            sortable: true,
            width: "150px",
        },
        {
            name: "Nomor Ortu",
            selector: (row) => row.no_ortu,
            cell: (row) => (
                <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                    {row.no_ortu}
                </div>
            ),
            sortable: true,
            width: "150px",
        },
        {
            name: "Aksi",
            cell: (row) =>
                loading ? (
                    <div className="animate-pulse bg-gray-300 h-4 w-32 rounded"></div>
                ) : (
                    <Link
                        href={route("siswa.edit", row.id)}
                        className="bg-yellow-400 hover:bg-yellow-300 text-sm no-underline hover:text-gray-900 py-1 px-2 rounded text-black font-medium "
                    >
                        Edit
                    </Link>
                ),
            maxwidth: "50px",
        },
    ];

    const loadingSkeleton = [...Array(perPage)].map((_, i) => ({
        id: `loading-${i}`,
        nama_siswa: (
            <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
        ),
        nis: <div className="animate-pulse bg-gray-300 h-4 w-20 rounded"></div>,
        kelas: (
            <div className="animate-pulse bg-gray-300 h-4 w-28 rounded"></div>
        ),
        nama_ortu: (
            <div className="animate-pulse bg-gray-300 h-4 w-32 rounded"></div>
        ),
        no_ortu: (
            <div className="animate-pulse bg-gray-300 h-4 w-36 rounded"></div>
        ),
    }));

    const handleRowSelected = useCallback((state) => {
        setSelectedRows(state.selectedRows.map((row) => row.id));
    }, []);

    const contextActions = useMemo(() => {
        const deleteSiswa = (e, id) => {
            e.preventDefault();

            if (!window.confirm("Apakah kamu yakin akan menghapusnya?")) {
                return;
            }

            router.get(route("siswa.destroy", [id]));
        };

        return (
            <button
                onClick={(e) => deleteSiswa(e, selectedRows)}
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
                        href={route("siswa.create")}
                        className="bg-violet-300 hover:bg-violet-200 no-underline hover:text-gray-700 pt-2 px-3 rounded text-black font-medium"
                    >
                        Tambah
                    </Link>

                    <FilterComponent
                        onFilter={(e) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                </div>

                <div className="mt-3 -ms-2">
                    <div className="w-80">
                        <ImportFormSiswa />
                    </div>
                    <div className=" -mt-20">
                        <a
                            href={route("download-template-siswa")}
                            className="hover:bg-green-200 py-2 no-underline hover:text-gray-700 px-3 rounded text-black text-sm font-medium"
                            style={{ backgroundColor: "#4EE454" }}
                        >
                            Download Template
                        </a>
                    </div>
                </div>
            </div>
        );
    }, [filterText]);

    const handlePageChange = (page) => {
        setLoading(true);

        router.get(
            route("siswa.index", { page, perPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.siswa.current_page);
                    setTotalRows(pageData.props.siswa.total);
                    setLoading(false);
                },
            },
        );
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
        setLoading(true);

        router.get(
            route("siswa.index", { page, perPage: newPerPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.siswa.current_page);
                    setTotalRows(pageData.props.siswa.total);
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
            <Head title="Siswa" />

            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-5">
                        <DataTable
                            title="Siswa"
                            columns={columns}
                            data={loading ? loadingSkeleton : filteredItems}
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
