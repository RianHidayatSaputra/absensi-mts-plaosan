import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useMemo, useState, useCallback } from "react";
import DataTable from "react-data-table-component";

const Index = ({ auth, kontrakGuru }) => {
    const [selectedRows, setSelectedRows] = useState([]);

    const columns = [
        {
            name: "#",
            cell: (row, index) => index + 1,
            maxwidth: "50px",
        },
        {
            name: "Hari",
            selector: (row) => row.hari,
            sortable: true,
        },
        {
            name: "Aksi",
            cell: (row) => (
                <Link
                    href={route("kontrak-guru.edit", row.id)}
                    className="bg-yellow-400 hover:bg-yellow-300 text-sm no-underline hover:text-gray-900 py-1 px-2 rounded text-black font-medium "
                >
                    Edit
                </Link>
            ),
            maxwidth: "50px",
        },
    ];

    const handleRowSelected = useCallback((state) => {
        setSelectedRows(state.selectedRows.map((row) => row.id));
    }, []);

    const contextActions = useMemo(() => {
        const deleteKontrakGuru = (e, id) => {
            e.preventDefault();

            if (!window.confirm("Apakah kamu yakin akan menghapusnya?")) {
                return;
            }

            router.get(route("kontrak-guru.destroy", [id]));
        };

        return (
            <button
                onClick={(e) => deleteKontrakGuru(e, selectedRows)}
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
                    href={route("kontrak-guru.create")}
                    className="bg-violet-300 hover:bg-violet-200 no-underline hover:text-gray-700 py-1 px-3 rounded text-black font-medium"
                >
                    Tambah
                </Link>
            </div>
        );
    }, []);

    return (
        <AuthenticatedLayout user={auth}>
            <Head title="Kontrak Guru" />

            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-4">
                        <DataTable
                            title="Kontrak Guru"
                            columns={columns}
                            data={kontrakGuru}
                            selectableRows
                            contextActions={contextActions}
                            onSelectedRowsChange={handleRowSelected}
                            responsive
                            highlightOnHover
                            striped
                            subHeader
                            subHeaderComponent={subHeaderComponentMemo}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
