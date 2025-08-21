import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
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
            type="text"
            ref={inputRef}
            id="search"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
    );
};

const ImportFormGuru = () => {
    const { data, setData, post, reset, processing } = useForm({
        file: "",
    });

    const importGuru = (e) => {
        e.preventDefault();

        post(route("import-guru"), {
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
            onSubmit={(e) => importGuru(e)}
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

const Index = ({ auth, guru, perPage: initialPerPage }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(guru.current_page);
    const [totalRows, setTotalRows] = useState(guru.total);
    const [perPage, setPerPage] = useState(initialPerPage || 10);
    const [filterText, setFilterText] = useState("");
    const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);
    const [loading, setLoading] = useState(true);

    const debounceTimeout = useRef(null);

    const filteredItems = guru.data.filter(
        (item) =>
            item.nama &&
            item.nama.toLowerCase().includes(debouncedFilterText.toLowerCase()),
    );

    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            setDebouncedFilterText(filterText);
        });

        return () => {
            clearTimeout(debounceTimeout.current);
        };
    }, [filterText]);

    useEffect(() => {
        setTotalRows(guru.total);
        setLoading(false);
    }, [guru]);

    const columns = [
        {
            name: "#",
            cell: (row, index) => (currentPage - 1) * perPage + index + 1,
            maxwidth: "50px",
        },
        {
            name: "Nama",
            selector: (row) => row.nama,
            cell: (row) => (
                <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                    {row.nama}
                </div>
            ),
            sortable: true,
            width: "200px",
        },
        {
            name: "NUPTK",
            selector: (row) => (row.nuptk ? row.nuptk : "-"),
            sortable: true,
            width: "200px",
        },
        {
            name: "Jabatan",
            selector: (row) => row.jabatan,
            sortable: true,
            width: "200px",
        },
        {
            name: "Status Kepegawaian",
            selector: (row) => row.status_kepegawaian,
            sortable: true,
        },
        {
            name: "Alamat",
            selector: (row) => row.alamat,
            cell: (row) => (
                <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                    {row.alamat}
                </div>
            ),
            sortable: true,
            width: "350px",
        },
        {
            name: "Hari Kontrak",
            cell: (row) => {
                let strHariKontrak = `${row.kontrak_guru}`;
                var arrHariKontrak = strHariKontrak.split(",");

                if (arrHariKontrak[0] == "null" || arrHariKontrak[0] == "") {
                    arrHariKontrak.shift();
                }

                return (
                    <div className="border-b border-gray-300 font-medium text-left py-4 li-hari">
                        {row.kontrak_guru == null || row.kontrak_guru == "" ? (
                            "Masuk Terus"
                        ) : (
                            <ul className="pl-4">
                                {arrHariKontrak.map((val, i) => {
                                    return <li key={i}>{val}</li>;
                                })}
                            </ul>
                        )}
                    </div>
                );
            },
            sortable: true,
        },
        {
            name: "Nomor WhatsApp",
            selector: (row) => row.no_wa,
            cell: (row) => (
                <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                    {row.no_wa}
                </div>
            ),
            sortable: true,
            width: "150px",
        },
        {
            name: "Aksi",
            cell: (row) => (
                <Link
                    href={route("guru.edit", row.id)}
                    className="bg-yellow-400 hover:bg-yellow-300 text-sm no-underline hover:text-gray-900 py-1 px-2 rounded text-black font-medium"
                >
                    Edit
                </Link>
            ),
            maxwidth: "50px",
        },
    ];

    const loadingSkeleton = [...Array(perPage)].map((_, i) => ({
        id: `loading-${i}`,
        nama: (
            <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
        ),
        nuptk: (
            <div className="animate-pulse bg-gray-300 h-4 w-20 rounded"></div>
        ),
        jabatan: (
            <div className="animate-pulse bg-gray-300 h-4 w-28 rounded"></div>
        ),
        status_kepegawaian: (
            <div className="animate-pulse bg-gray-300 h-4 w-32 rounded"></div>
        ),
        alamat: (
            <div className="animate-pulse bg-gray-300 h-4 w-40 rounded"></div>
        ),
        aksi: (
            <div className="animate-pulse bg-gray-300 h-6 w-16 rounded"></div>
        ),
    }));

    const handleRowSelected = useCallback((state) => {
        setSelectedRows(state.selectedRows.map((row) => row.id));
    });

    const contextActions = useMemo(() => {
        const deleteGuru = (e, id) => {
            e.preventDefault();

            if (!window.confirm("Apakah kamu yakin akan menghapusnya?")) {
                return;
            }

            router.get(route("guru.destroy", [id]));
        };

        return (
            <button
                onClick={(e) => deleteGuru(e, selectedRows)}
                className="bg-red-400 hover:bg-red-300 no-underline hover:text-gray-900 py-1 px-2 text-sm ml-3 rounded text-black font-mediums"
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
                        href={route("guru.create")}
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
                        <ImportFormGuru />
                    </div>
                    <div className=" -mt-20">
                        <a
                            href={route("download-template-guru")}
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
            route("guru.index", { page, perPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.guru.current_page);
                    setTotalRows(pageData.props.guru.total);
                    setLoading(false);
                },
            },
        );
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
        setLoading(true);
        router.get(
            route("guru.index", { page, perPage: newPerPage }),
            {},
            {
                replace: true,
                preserveState: true,
                onSuccess: (pageData) => {
                    setCurrentPage(pageData.props.guru.current_page);
                    setTotalRows(pageData.props.guru.total);
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
            <Head title="Guru" />

            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-5">
                        <DataTable
                            title="Guru"
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
