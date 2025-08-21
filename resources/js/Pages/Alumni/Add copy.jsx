import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import SelectOption from "@/Components/SelectOption";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";
import { Select, Space } from "antd";

const options = [];
for (let i = 10; i < 36; i++) {
    options.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i,
    });
}

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const Add = ({ auth, kelas }) => {
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
                        <div className="border-b border-gray-300 px-5 py-4">
                            <h4>Pindah Kelas</h4>
                        </div>

                        <Space style={{ width: "100%" }} direction="vertical">
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: "100%" }}
                                placeholder="Please select"
                                defaultValue={["a10", "c12"]}
                                onChange={handleChange}
                                options={options}
                            />
                        </Space>

                        <form
                            onSubmit={handleSubmit}
                            className="relative flex flex-row overflow-x-auto mt-3 mb-4 justify-between "
                        >
                            <div className="ml-7 grid md:w-2/5">
                                <label
                                    htmlFor="withLabel"
                                    className=" block text-gray-600 mt-3"
                                >
                                    Dari Kelas
                                </label>
                                {kelas.map((val, i) => {
                                    return (
                                        <Checkbox>
                                            <SelectOption
                                                onChange={(e) =>
                                                    setData(
                                                        "status",
                                                        e.target.value,
                                                    )
                                                }
                                                className="mt-3 w-4/5"
                                                defaultValue={""}
                                            >
                                                <option value="">
                                                    {val.nama_kelas}
                                                </option>
                                                {val.siswa.map((sis, ind) => {
                                                    return (
                                                        <Checkbox>
                                                            <option value="Belum Hadir">
                                                                {sis.nama_siswa}
                                                            </option>
                                                        </Checkbox>
                                                    );
                                                })}
                                            </SelectOption>
                                        </Checkbox>
                                    );
                                })}
                                <InputError
                                    message={errors.status ?? ""}
                                    className="mt-2 mb-4"
                                />
                            </div>

                            <div className=" flex items-center">
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="text-4xl"
                                />
                            </div>

                            <div className="mr-9 flex md:w-2/5 justify-end">
                                <div className="grid w-4/5">
                                    <label
                                        htmlFor="withLabel"
                                        className=" block text-gray-600 mt-3"
                                    >
                                        Dari Kelas
                                    </label>
                                    {kelas.map((val, i) => {
                                        return (
                                            <Checkbox>
                                                <SelectOption
                                                    onChange={(e) =>
                                                        setData(
                                                            "status",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="mt-3 w-full"
                                                    defaultValue={""}
                                                >
                                                    <option value="">
                                                        {val.nama_kelas}
                                                    </option>
                                                    {val.siswa.map(
                                                        (sis, ind) => {
                                                            return (
                                                                <option value="Belum Hadir">
                                                                    {
                                                                        sis.nama_siswa
                                                                    }
                                                                </option>
                                                            );
                                                        },
                                                    )}
                                                </SelectOption>
                                            </Checkbox>
                                        );
                                    })}
                                    <InputError
                                        message={errors.status ?? ""}
                                        className="mt-2 mb-4"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Add;
