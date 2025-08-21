import InputError from "@/Components/InputError";
import SelectOption from "@/Components/SelectOption";
import SelectOptionSearchSiswa from "@/Components/SelectOptionSearchSiswa";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const Add = ({ auth, siswa }) => {
    const { data, setData, post, errors, reset, processing } = useForm({
        id_siswa: "",
        absen_masuk: "",
        absen_pulang: "",
        status: "",
        created_at: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("rekap-siswa.store"), {
            onSuccess: () =>
                reset(
                    "id_siswa",
                    "absen_masuk",
                    "absen_pulang",
                    "status",
                    "created_at",
                ),
        });
    };

    return (
        <AuthenticatedLayout user={auth}>
            <Head title="Absen Siswa Manual" />
            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-4">
                        <div className="border-b border-gray-300 px-5 py-4 mb-3">
                            <h4>Tambah Absen Manual</h4>
                        </div>

                        <div className="relative overflow-x-auto mt-3 mb-4 ">
                            <form
                                className="mx-5 grid md:w-2/5"
                                onSubmit={handleSubmit}
                            >
                                <label
                                    htmlFor="withLabel"
                                    className="mb-1 block text-gray-600 mt-3"
                                >
                                    Siswa
                                </label>
                                <SelectOptionSearchSiswa
                                    siswa={siswa}
                                    onChange={(id) => setData("id_siswa", id)}
                                />
                                <InputError
                                    message={errors.id_siswa ?? ""}
                                    className="mt-2"
                                />

                                <label
                                    htmlFor="withLabel"
                                    className="mb-1 block text-gray-600 mt-3"
                                >
                                    Absen Masuk
                                </label>
                                <TextInput
                                    type="time"
                                    placeholder="Absen Masuk"
                                    value={data.absen_masuk}
                                    onChange={(e) =>
                                        setData("absen_masuk", e.target.value)
                                    }
                                />

                                <label
                                    htmlFor="withLabel"
                                    className="mb-1 block text-gray-600 mt-3"
                                >
                                    Absen Pulang
                                </label>
                                <TextInput
                                    type="time"
                                    placeholder="Absen Pulang"
                                    value={data.absen_pulang}
                                    onChange={(e) =>
                                        setData("absen_pulang", e.target.value)
                                    }
                                />

                                <label
                                    htmlFor="withLabel"
                                    className="mb-1 block text-gray-600 mt-3"
                                >
                                    Status
                                </label>
                                <SelectOption
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    defaultValue={""}
                                >
                                    <option value="">Pilih Status Absen</option>
                                    <option value="Belum Hadir">
                                        Belum Hadir
                                    </option>
                                    <option value="Belum Hadir dan Terlambat">
                                        Belum Hadir dan Terlambat
                                    </option>
                                    <option value="Hadir">Hadir</option>
                                    <option value="Hadir tapi Terlambat">
                                        Hadir tapi Terlambat
                                    </option>
                                    <option value="Tidak Hadir">
                                        Tidak Hadir
                                    </option>
                                    <option value="Izin">Izin</option>
                                    <option value="Sakit">Sakit</option>
                                </SelectOption>
                                <InputError
                                    message={errors.status ?? ""}
                                    className="mt-2 mb-4"
                                />

                                <label
                                    htmlFor="withLabel"
                                    className="mb-1 block text-gray-600 mt-3"
                                >
                                    Tanggal
                                </label>
                                <TextInput
                                    type="date"
                                    placeholder="Tanggal"
                                    value={data.created_at}
                                    onChange={(e) =>
                                        setData("created_at", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.created_at ?? ""}
                                    className="mt-2 mb-4"
                                />

                                <div
                                    className={
                                        "flex justify-between " +
                                        (!errors.created_at ? "mt-3" : "")
                                    }
                                >
                                    <Link
                                        href={route("rekap-guru.index")}
                                        className="bg-violet-300 hover:bg-violet-200 py-2 no-underline hover:text-gray-700 px-3 rounded text-black font-medium"
                                    >
                                        Cancel
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-600 hover:bg-blue-500 py-2 no-underline hover:text-gray-700 px-3 rounded text-white font-medium "
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Add;
