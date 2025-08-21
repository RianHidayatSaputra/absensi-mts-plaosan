import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

const Edit = ({ auth, setting }) => {
    useEffect(() => {
        if (setting != null) {
            setData({
                absen_masuk: setting.absen_masuk,
                absen_pulang: setting.absen_pulang,
            });
        }
    }, [setting]);

    const { data, setData, put, post, errors, reset, processing } = useForm({
        absen_masuk: "",
        absen_pulang: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setting == null
            ? post(route("setting.store"), {
                  onSuccess: () => reset("absen_masuk", "absen_pulang"),
              })
            : put(route("setting.update", setting.id), {
                  onSuccess: () => reset("absen_masuk", "absen_pulang"),
              });
    };

    return (
        <AuthenticatedLayout user={auth}>
            <Head title="Setting" />

            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-4">
                        <div className="border-b border-gray-300 px-5 py-4 mb-3">
                            <h4>Setting</h4>
                        </div>

                        <div className="relative overflow-x-auto mt-3 mb-4 ">
                            <form
                                className="mx-5 grid md:w-2/5"
                                onSubmit={handleSubmit}
                            >
                                <label className="mb-1 block text-gray-600 mt-3">
                                    Absen Masuk
                                </label>
                                <TextInput
                                    type="time"
                                    placeholder="absen_masuk"
                                    value={data.absen_masuk}
                                    onChange={(e) =>
                                        setData("absen_masuk", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.absen_masuk ?? ""}
                                    className="mt-2"
                                />

                                <label className=" block text-gray-600 mt-4">
                                    Absen Pulang
                                </label>
                                <TextInput
                                    type="time"
                                    placeholder="absen_pulang"
                                    className="mt-1"
                                    value={data.absen_pulang}
                                    onChange={(e) =>
                                        setData("absen_pulang", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.absen_pulang ?? ""}
                                    className="mt-2 mb-3"
                                />

                                <div
                                    className={
                                        "flex justify-between " +
                                        (!errors.absen_pulang ? "mt-3" : "")
                                    }
                                >
                                    <Link
                                        href={route("setting.index")}
                                        className="bg-violet-300 hover:bg-violet-200 py-2 no-underline hover:text-gray-700 px-3 rounded text-black font-medium"
                                    >
                                        Cancel
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-600 hover:bg-blue-500 py-2 no-underline hover:text-gray-700 px-3 rounded text-white font-medium "
                                    >
                                        Update
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

export default Edit;
