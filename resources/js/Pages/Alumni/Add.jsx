import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";
import { Select, Space } from "antd";
import { useState } from "react";
import { useEffect } from "react";

const Add = ({ auth, kelas }) => {
    const [selectedValues, setSelectedValues] = useState([]);
    const [kelasDipilih, setKelasDipilih] = useState("");

    const handleCheckboxChange = (checked, kelasItem) => {
        setSelectedValues((prev) => {
            if (!checked) {
                return prev.filter((item) => item.idkelas !== kelasItem.id);
            }

            const siswaList = kelasItem.siswa.map((sis) => ({
                id: sis.id,
                nama_siswa: sis.nama_siswa,
            }));

            const existingIndex = prev.findIndex(
                (item) => item.idkelas === kelasItem.id,
            );

            let newState = [...prev];
            if (existingIndex >= 0) {
                newState[existingIndex].siswa = siswaList;
            } else {
                newState.push({
                    idkelas: kelasItem.id,
                    siswa: siswaList,
                });
            }

            return newState;
        });
    };

    const handleSelectChange = (values, kelasItem) => {
        setSelectedValues((prev) => {
            const siswaList = kelasItem.siswa
                .filter((sis) => values.includes(sis.nama_siswa))
                .map((sis) => ({
                    id: sis.id,
                    nama_siswa: sis.nama_siswa,
                }));

            const existingIndex = prev.findIndex(
                (item) => item.idkelas === kelasItem.id,
            );

            let newState = [...prev];
            if (existingIndex >= 0) {
                newState[existingIndex].siswa = siswaList;
            } else {
                newState.push({
                    idkelas: kelasItem.id,
                    siswa: siswaList,
                });
            }

            return newState;
        });
    };

    const handleChange = (namaKelas) => {
        setKelasDipilih(namaKelas);
    };

    const { data, setData, post, errors, reset, processing } = useForm({
        data_fe: [],
        id_ke_kelas: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("pindah-kelas.store"), {
            onSuccess: () => reset("data_fe"),
        });
    };

    useEffect(() => {
        setData("data_fe", selectedValues);
        setData("id_ke_kelas", kelasDipilih.toString());
    }, [selectedValues, kelasDipilih]);

    return (
        <AuthenticatedLayout user={auth}>
            <Head title="Absen Siswa Manual" />
            <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense ">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow mb-4">
                        <div className="border-b border-gray-300 px-5 py-4">
                            <h4>Pindah Kelas</h4>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="relative flex flex-row overflow-x-auto mt-3 mb-4 justify-between ">
                                <div className="ml-7 grid md:w-2/5">
                                    <label
                                        htmlFor="withLabel"
                                        className=" block text-gray-600 mt-3"
                                    >
                                        Dari Kelas
                                    </label>
                                    {kelas.map((val, i) => {
                                        const options = val.siswa.map(
                                            (sis) => ({
                                                label: sis.nama_siswa,
                                                value: sis.nama_siswa,
                                            }),
                                        );

                                        return (
                                            <>
                                                <div
                                                    className="flex mt-3"
                                                    key={i}
                                                >
                                                    <Checkbox
                                                        className="mr-2"
                                                        checked={
                                                            val.siswa.length >
                                                                0 &&
                                                            selectedValues.find(
                                                                (item) =>
                                                                    item.idkelas ===
                                                                        val.id &&
                                                                    item.siswa
                                                                        .length ===
                                                                        val
                                                                            .siswa
                                                                            .length,
                                                            )
                                                        }
                                                        disabled={
                                                            val.siswa.length ===
                                                            0
                                                        }
                                                        onChange={(e) =>
                                                            handleCheckboxChange(
                                                                e.target
                                                                    .checked,
                                                                val,
                                                            )
                                                        }
                                                    />
                                                    <Space
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                        direction="vertical"
                                                    >
                                                        <Select
                                                            mode="multiple"
                                                            allowClear
                                                            style={{
                                                                width: "100%",
                                                            }}
                                                            placeholder={
                                                                val.nama_kelas
                                                            }
                                                            options={val.siswa.map(
                                                                (sis) => ({
                                                                    label: sis.nama_siswa,
                                                                    value: sis.nama_siswa,
                                                                }),
                                                            )}
                                                            value={
                                                                selectedValues
                                                                    .find(
                                                                        (
                                                                            item,
                                                                        ) =>
                                                                            item.idkelas ===
                                                                            val.id,
                                                                    )
                                                                    ?.siswa.map(
                                                                        (sis) =>
                                                                            sis.nama_siswa,
                                                                    ) || []
                                                            }
                                                            onChange={(
                                                                values,
                                                            ) =>
                                                                handleSelectChange(
                                                                    values,
                                                                    val,
                                                                )
                                                            }
                                                        />
                                                    </Space>
                                                </div>
                                            </>
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

                                <div className="mr-9 flex md:w-2/5">
                                    <div className="grid w-full">
                                        <label
                                            htmlFor="withLabel"
                                            className=" block text-gray-600 mt-3"
                                        >
                                            Ke Kelas
                                        </label>
                                        {kelas.map((val, i) => {
                                            const options = val.siswa.map(
                                                (sis) => ({
                                                    label: sis.nama_siswa,
                                                    value: sis.nama_siswa,
                                                }),
                                            );

                                            return (
                                                <>
                                                    <div className="flex mt-3">
                                                        <input
                                                            type="radio"
                                                            className="mr-1 mt-[2px]"
                                                            value={val.id}
                                                            checked={
                                                                kelasDipilih ===
                                                                val.id
                                                            }
                                                            onChange={() =>
                                                                handleChange(
                                                                    val.id,
                                                                )
                                                            }
                                                        />
                                                        <p>{val.nama_kelas}</p>
                                                    </div>
                                                </>
                                            );
                                        })}
                                        <div className="flex mt-3">
                                            <input
                                                type="radio"
                                                className="mr-1 mt-[2px]"
                                                value="alumni"
                                                checked={
                                                    kelasDipilih == "alumni"
                                                }
                                                onChange={() =>
                                                    handleChange("alumni")
                                                }
                                            />
                                            <p>Alumni</p>
                                        </div>
                                        <InputError
                                            message={errors.status ?? ""}
                                            className="mt-2 mb-4"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-blue-600 hover:bg-blue-500 py-2 no-underline hover:text-gray-700 px-3 rounded float-right mr-10 text-white font-medium "
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Add;
