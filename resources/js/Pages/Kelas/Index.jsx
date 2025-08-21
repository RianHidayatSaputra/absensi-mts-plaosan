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

const Index = ({ auth, kelas, perPage: initialPerPage }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(kelas.current_page);
    const [totalRows, setTotalRows] = useState(kelas.total);
    const [perPage, setPerPage] = useState(initialPerPage || 10);
    const [filterText, setFilterText] = useState("");
    const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);
    const [loading, setLoading] = useState(true);
    const debounceTimeout = useRef(null);

    const filteredItems = kelas.data.filter(
        (item) =>
            item.nama_kelas &&
            item.nama_kelas
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
        setTotalRows(kelas.total);
    }, [kelas]);

    const columns = [
        {
            name: "#",
            cell: (row, index) => (currentPage - 1) * perPage + index + 1,
            width: "60px",
        },
        {
            name: "Nama Kelas",
            selector: (row) => row.nama_kelas,
            cell: (row) => (
                <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                    {row.nama_kelas}
                </div>
            ),
            sortable: true,
            width: "200px",
        },
        {
            name: "Aksi",
            cell: (row) =>
                loading ? (
                    <div className="animate-pulse bg-gray-300 h-4 w-32 rounded"></div>
                ) : (
                    <Link
                        href={route("kelas.edit", row.id)}
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
        nama_kelas: (
            <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
        ),
    }));

    const handleRowSelected = useCallback((state) => {
        setSelectedRows(state.selectedRows.map((row) => row.id));
    }, []);

    const contextActions = useMemo(() => {
        const deleteKelas = (e, id) => {
            e.preventDefault();

            if (!window.confirm("Apakah kamu yakin akan menghapusnya?")) {
                return;
            }

            router.get(route("kelas.destroy", [id]));
        };

        return (
            <button
                onClick={(e) => deleteKelas(e, selectedRows)}
                className="bg-red-400 hover:bg-red-300 no-underline hover:text-gray-900 py-1 px-2 text-md ml-3 rounded text-black font-mediums"
            >
                Hapus
            </button>
        );
    }, [selectedRows]);

    const subHeaderComponentMemo = useMemo(() => {
        return (
            <div className="w-full mb-6">
                <div className="w-full flex justify-between">
                    <Link
                        href={route("kelas.create")}
                        className="bg-violet-300 hover:bg-violet-200 no-underline hover:text-gray-700 pt-2 px-3 rounded text-black font-medium"
                    >
                        Tambah
                    </Link>

                    <FilterComponent
                        onFilter={(e) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                </div>
            </div>
        );
    }, [filterText]);

    const handlePageChange = (page) => {
        setLoading(true);

        router.get(
            route("kelas.index", { page, perPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.kelas.current_page);
                    setTotalRows(pageData.props.kelas.total);
                    setLoading(false);
                },
            },
        );
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
        setLoading(true);

        router.get(
            route("kelas.index", { page, perPage: newPerPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.kelas.current_page);
                    setTotalRows(pageData.props.kelas.total);
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
            <Head title="Kelas" />

            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-4">
                        <DataTable
                            title="Kelas"
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
