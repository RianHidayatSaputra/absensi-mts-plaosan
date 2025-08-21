import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
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

const Index = ({ auth, user, perPage: initialPerPage }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(user.current_page);
    const [totalRows, setTotalRows] = useState(user.total);
    const [perPage, setPerPage] = useState(initialPerPage || 10);
    const [filterText, setFilterText] = useState("");
    const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);
    const [loading, setLoading] = useState(true);

    const debounceTimeout = useRef(null);

    const filteredItems = user.data.filter(
        (item) =>
            item.name &&
            item.name.toLowerCase().includes(debouncedFilterText.toLowerCase()),
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
        setTotalRows(user.total);
    }, [user]);

    const columns = [
        {
            name: "#",
            cell: (row, index) => (currentPage - 1) * perPage + index + 1,
            maxwidth: "50px",
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Role",
            selector: (row) => row.role,
            sortable: true,
        },
        {
            name: "Aksi",
            cell: (row) =>
                loading ? (
                    <div className="animate-pulse bg-gray-300 h-4 w-32 rounded"></div>
                ) : (
                    <Link
                        href={route("user.edit", row.id)}
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
        name: (
            <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
        ),
        email: (
            <div className="animate-pulse bg-gray-300 h-4 w-20 rounded"></div>
        ),
        role: (
            <div className="animate-pulse bg-gray-300 h-4 w-28 rounded"></div>
        ),
    }));

    const handleRowSelected = useCallback((state) => {
        setSelectedRows(state.selectedRows.map((row) => row.id));
    }, []);

    const contextActions = useMemo(() => {
        const deleteUser = (e, id) => {
            e.preventDefault();

            if (!window.confirm("Apakah kamu yakin akan menghapusnya?")) {
                return;
            }

            router.get(route("user.destroy", [id]));
        };

        return (
            <button
                onClick={(e) => deleteUser(e, selectedRows)}
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
                    href={route("user.create")}
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
        setLoading(true);

        router.get(
            route("user.index", { page, perPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    if (pageData.props.user) {
                        setCurrentPage(pageData.props.user.current_page);
                        setTotalRows(pageData.props.user.total);
                        setLoading(false);
                    } else {
                        setLoading(false);
                    }
                },
            },
        );
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
        setLoading(true);

        router.get(
            route("user.index", { page, perPage: newPerPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    if (pageData.props.user) {
                        setCurrentPage(pageData.props.user.current_page);
                        setTotalRows(pageData.props.user.total);
                        setLoading(false);
                    } else {
                        setLoading(false);
                    }
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
            <Head title="User" />

            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-4 p-3">
                        <DataTable
                            title="Users"
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
