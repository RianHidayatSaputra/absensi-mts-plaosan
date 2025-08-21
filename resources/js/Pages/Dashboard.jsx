import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    faUserGraduate,
    faUsers,
    faUserGear,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link } from "@inertiajs/react";
import { Chart, registerables } from "chart.js";
import { useEffect, useRef, useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;

const Dashboard = ({
    auth,
    users,
    gurus,
    siswas,
    total_absen_guru,
    siswaTerlambatHariIni,
    siswaTidakHadirMingguIni,
}) => {
    const [dates, setDates] = useState([]);
    const [eror, setEror] = useState("");
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    const chartRef3 = useRef(null);

    useEffect(() => {
        Chart.register(...registerables);

        const ctx1 = document.getElementById("myChart");
        const ctx2 = document.getElementById("chartSiswaTerlambat");
        const ctx3 = document.getElementById("chartSiswaTidakHadir");

        if (chartRef1.current) {
            chartRef1.current.destroy();
        }

        if (chartRef2.current) {
            chartRef2.current.destroy();
        }

        if (chartRef3.current) {
            chartRef3.current.destroy();
        }

        chartRef1.current = new Chart(ctx1, {
            type: "line",
            data: {
                labels: gurus.map((val) => val.nama),
                datasets: [
                    {
                        label: "hadir",
                        data: total_absen_guru.map((val) => val),
                        borderWidth: 2,
                        lineTension: 0.3,
                        backgroundColor: "rgba(78, 115, 223, 0.05)",
                        borderColor: "rgba(78, 115, 223, 1)",
                        pointRadius: 3,
                        pointBackgroundColor: "rgba(78, 115, 223, 1)",
                        pointBorderColor: "rgba(78, 115, 223, 1)",
                        pointHitRadius: 10,
                        pointBorderWidth: 2,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            autoSkip: false,
                        },
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                animations: {
                    tension: {
                        duration: 2000,
                        easing: "easeInCirc",
                        from: 0.5,
                        to: 0,
                        loop: true,
                    },
                },
            },
        });

        chartRef2.current = new Chart(ctx2, {
            type: "bar",
            data: {
                labels: siswaTerlambatHariIni.map((val) => val.nama_kelas),
                datasets: [
                    {
                        label: "Perkelas",
                        data: siswaTerlambatHariIni.map((kelas) =>
                            kelas.siswa.reduce(
                                (jumlah, siswa) =>
                                    jumlah + siswa.rekap_siswa.length,
                                0,
                            ),
                        ),
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                            "rgba(255, 205, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(201, 203, 207, 0.2)",
                            "rgba(239, 223, 6, 0.3)",
                            "rgba(199, 32, 79, 0.35)",
                            "rgba(220, 20, 20, 0.31)",
                            "rgba(12, 205, 215, 0.31)",
                            "rgba(198, 21, 189, 0.3)",
                            "rgba(169, 195, 26, 0.31)",
                            "rgba(74, 198, 58, 0.45)",
                            "rgba(0, 227, 248, 0.2)",
                        ],
                        borderColor: [
                            "rgba(243, 22, 22, 1)",
                            "rgba(238, 0, 226, 1)",
                            "rgba(105, 0, 243, 1)",
                            "rgba(7, 22, 235, 1)",
                            "rgba(4, 250, 82, 1)",
                            "rgba(210, 237, 4, 1)",
                            "rgba(234, 133, 0, 1)",
                            "rgba(145, 247, 12, 1)",
                            "rgb(255, 99, 132)",
                            "rgb(255, 159, 64)",
                            "rgb(255, 205, 86)",
                            "rgb(75, 192, 192)",
                            "rgb(54, 162, 235)",
                            "rgb(153, 102, 255)",
                            "rgb(201, 203, 207)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 0.1,
                            callback: function (value) {
                                return Number.isInteger(value) ? value : "";
                            },
                        },
                    },
                },
                responsive: true,
            },
        });

        chartRef3.current = new Chart(ctx3, {
            type: "polarArea",
            data: {
                labels: siswaTidakHadirMingguIni.map((val) => val.nama_kelas),
                datasets: [
                    {
                        label: "Total",
                        data: siswaTidakHadirMingguIni.map((kelas) =>
                            kelas.siswa.reduce(
                                (jumlah, siswa) =>
                                    jumlah + siswa.rekap_siswa.length,
                                0,
                            ),
                        ),
                        backgroundColor: [
                            "rgba(4, 250, 82, 1)",
                            "rgba(210, 237, 4, 1)",
                            "rgba(234, 133, 0, 1)",
                            "rgba(145, 247, 12, 1)",
                            "rgb(255, 99, 132)",
                            "rgb(255, 159, 64)",
                            "rgb(255, 205, 86)",
                            "rgb(75, 192, 192)",
                            "rgb(54, 162, 235)",
                            "rgb(153, 102, 255)",
                            "rgb(201, 203, 207)",
                        ],
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 0.1,
                            callback: function (value) {
                                return Number.isInteger(value) ? value : "";
                            },
                        },
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                animations: {
                    tension: {
                        duration: 2000,
                        easing: "easeInCirc",
                        from: 0.5,
                        to: 0,
                        loop: true,
                    },
                },
            },
        });

        return () => {
            if (chartRef1.current) {
                chartRef1.current.destroy();
            }
            if (chartRef2.current) {
                chartRef2.current.destroy();
            }
            if (chartRef3.current) {
                chartRef3.current.destroy();
            }
        };
    }, [gurus, total_absen_guru]);

    const searchAbsent = (_) => {
        setEror("");
        setDates(_.map((__) => moment(__.$d).format("YYYY-MM-DD")));
    };

    const exportExcel = (e) => {
        e.preventDefault();

        if (dates.length == 0) {
            return setEror("Pilih tanggal dahulu!");
        } else {
            window.open(route("export-excel/perbulan", { dates }), "_self");
        }
    };

    return (
        <>
            <AuthenticatedLayout
                user={auth}
                // user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard Asli
                    </h2>
                }
            >
                <Head title="Dashboard" />

                <div className="bg-indigo-600 px-8 pt-10 lg:pt-14 pb-16 flex justify-between items-center mb-3">
                    {/* title */}
                    <h1 className="text-xl text-white">Dashboard</h1>
                    {/* <a
                        href="#"
                        className="btn bg-white text-gray-800 border-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-200 active:bg-gray-100 active:text-gray-800 active:border-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-300">
                        Create New Project
                     </a> */}
                </div>

                <div className="-mt-12 mx-6 mb-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 xl:grid-cols-3">
                    {/* card */}
                    <div className="card shadow">
                        {/* card body */}
                        <div className="card-body">
                            {/* content */}
                            <div className="flex justify-between items-center">
                                <h4>Users</h4>
                                <div className="bg-indigo-600 bg-opacity-10 rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
                                    <FontAwesomeIcon icon={faUserGear} />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col gap-0 text-base">
                                <h2 className="text-xl font-bold">
                                    {users.length}
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card shadow">
                        {/* card boduy */}
                        <div className="card-body">
                            {/* content */}
                            <div className="flex justify-between items-center">
                                <h4>Guru</h4>
                                <div className="bg-indigo-600 bg-opacity-10 rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
                                    <FontAwesomeIcon icon={faUserGraduate} />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col gap-0 text-base">
                                <h2 className="text-xl font-bold">
                                    {gurus.length}
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card shadow">
                        {/* card body */}
                        <div className="card-body">
                            {/* content */}
                            <div className="flex justify-between items-center">
                                <h4>Siswa</h4>
                                <div className="bg-indigo-600 bg-opacity-10 rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
                                    <FontAwesomeIcon icon={faUsers} />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col gap-0 text-base">
                                <h2 className="text-xl font-bold">
                                    {siswas.length}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-6 mb-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 ">
                    {/* card */}
                    <div className="xl:col-span-2 card shadow">
                        {/* card body */}
                        <div className="card-body">
                            {/* content */}
                            <div className="flex justify-between items-center">
                                <h4>Grafik Keterlambatan Siswa Hari Ini</h4>
                                {/* <div className="bg-indigo-600 bg-opacity-10 rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
                                    <FontAwesomeIcon icon={faUserGear} />
                                </div> */}
                            </div>
                            <div className="mt-4 flex flex-col gap-0 text-base">
                                <div
                                    className="w-100"
                                    style={{ height: "400px" }}
                                >
                                    <canvas id="chartSiswaTerlambat"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card shadow">
                        {/* card boduy */}
                        <div className="card-body">
                            {/* content */}
                            <div className="flex justify-between items-center">
                                <h4>Siswa Tidak Hadir Minggu Ini</h4>
                                {/* <div className="bg-indigo-600 bg-opacity-10 rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
                                    <FontAwesomeIcon icon={faUserGraduate} />
                                </div> */}
                            </div>
                            <div className="mt-4 flex flex-col gap-0 text-base">
                                <div
                                    className="w-100"
                                    style={{ height: "400px" }}
                                >
                                    <canvas id="chartSiswaTidakHadir"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-6 grid grid-cols-1 xl:grid-cols-1 grid-rows-1 grid-flow-row-dense gap-6 mt-5">
                    <div className="xl:col-span-2">
                        <div className="card h-full shadow">
                            {/* heading */}
                            <div className="border-b border-gray-300 px-5 py-4 flex justify-between">
                                <h4>Grafik Kehadiran</h4>
                                <div className="flex justify-between">
                                    <button
                                        onClick={exportExcel}
                                        className="bg-teal-400 hover:bg-teal-300 no-underline hover:text-gray-90 py-2 px-3 mx-3 mb-5 rounded text-black font-medium "
                                    >
                                        Export
                                    </button>

                                    <div>
                                        <RangePicker
                                            onChange={(_) => searchAbsent(_)}
                                            className="mr-3 p-2"
                                        />
                                        {eror ? (
                                            <p className="italic text-red-400">
                                                {eror}
                                            </p>
                                        ) : (
                                            ""
                                        )}
                                    </div>

                                    <Link
                                        href={route("dashboard", { dates })}
                                        className="bg-indigo-600 h-9 hover:bg-indigo-500 py-2 no-underline hover:text-gray-700 px-3 rounded text-white font-medium"
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative overflow-x-auto">
                                <div
                                    className="w-100"
                                    style={{ height: "400px" }}
                                >
                                    <canvas id="myChart"></canvas>
                                </div>
                                {/* table */}
                                {/* <table className="text-left w-full whitespace-nowrap">
                                 <thead className="text-gray-700">
                                    <tr>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Project name</th>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Hours</th>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Priority</th>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Members</th>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Progress</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src={BrandLogo1} alt="" className="h-6 w-6" />

                                             <h5 className="mb-1 ml-4"><a href="#!">Dropbox Design System</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">34</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-yellow-200 px-2 py-1 text-yellow-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">Medium</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-1.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-2.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-1.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">2+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>15%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '15%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src="./assets/images/svg/brand-logo-2.svg" alt="" className="h-6 w-6" />
                                             <h5 className="ml-4"><a href="#!">Slack Team UI Design</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">47</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-red-200 px-2 py-1 text-red-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">High</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-4.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-5.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-6.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">2+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>35%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '35%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src="./assets/images/svg/brand-logo-3.svg" alt="" className="h-6 w-6" />
                                             <h5 className="ml-4"><a href="#!">GitHub Satellite</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">120</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-cyan-200 px-2 py-1 text-cyan-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">Low</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-7.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-8.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-9.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">5+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>75%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '75%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src="./assets/images/svg/brand-logo-4.svg" alt="" className="h-6 w-6" />
                                             <h5 className="ml-4"><a href="#!">3D Character Modelling</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">89</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-yellow-200 px-2 py-1 text-yellow-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">Medium</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-10.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-11.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-12.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">5+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>63%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '63%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src="./assets/images/svg/brand-logo-5.svg" alt="" className="h-6 w-6" />
                                             <h5 className="ml-4"><a href="#!">Webapp Design System</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">89</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-green-200 px-2 py-1 text-green-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">Track</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-13.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-11.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-12.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">5+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>100%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-green-600 h-1.5 rounded-full" style={{width: '100%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src="./assets/images/svg/brand-logo-6.svg" alt="" className="h-6 w-6" />
                                             <h5 className="ml-4"><a href="#!">Github Event Design</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">120</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-cyan-200 px-2 py-1 text-cyan-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">Low</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-13.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-11.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-12.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">4+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>75%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '75%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mx-6 grid grid-cols-1 xl:grid-cols-3 grid-rows-1 grid-flow-row-dense gap-6 mt-4">
                     <div className="xl:col-span-2">
                        <div className="card h-full shadow">
                           {
                           <div className="border-b border-gray-300 px-5 py-4">
                              <h4>Grafik Kehadiran</h4>
                           </div>

                           <div className="relative overflow-x-auto">
                           <div>
                              <canvas id="myChart"></canvas>
                           </div>
                              
                              {/* < className="text-left w-full whitespace-nowrap">
                                 <thead className="text-gray-700">
                                    <tr>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Project name</th>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Hours</th>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Priority</th>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Members</th>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Progress</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src={BrandLogo1} alt="" className="h-6 w-6" />

                                             <h5 className="mb-1 ml-4"><a href="#!">Dropbox Design System</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">34</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-yellow-200 px-2 py-1 text-yellow-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">Medium</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-1.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-2.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-1.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">2+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>15%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '15%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src="./assets/images/svg/brand-logo-2.svg" alt="" className="h-6 w-6" />
                                             <h5 className="ml-4"><a href="#!">Slack Team UI Design</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">47</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-red-200 px-2 py-1 text-red-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">High</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-4.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-5.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-6.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">2+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>35%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '35%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src="./assets/images/svg/brand-logo-3.svg" alt="" className="h-6 w-6" />
                                             <h5 className="ml-4"><a href="#!">GitHub Satellite</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">120</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-cyan-200 px-2 py-1 text-cyan-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">Low</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-7.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-8.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-9.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">5+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>75%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '75%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src="./assets/images/svg/brand-logo-4.svg" alt="" className="h-6 w-6" />
                                             <h5 className="ml-4"><a href="#!">3D Character Modelling</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">89</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-yellow-200 px-2 py-1 text-yellow-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">Medium</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-10.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-11.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-12.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">5+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>63%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '63%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src="./assets/images/svg/brand-logo-5.svg" alt="" className="h-6 w-6" />
                                             <h5 className="ml-4"><a href="#!">Webapp Design System</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">89</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-green-200 px-2 py-1 text-green-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">Track</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-13.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-11.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-12.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">5+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>100%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-green-600 h-1.5 rounded-full" style={{width: '100%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <img src="./assets/images/svg/brand-logo-6.svg" alt="" className="h-6 w-6" />
                                             <h5 className="ml-4"><a href="#!">Github Event Design</a></h5>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">120</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-cyan-200 px-2 py-1 text-cyan-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">Low</span>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="-space-x-5">
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-13.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2" src="./assets/images/avatar/avatar-11.jpg" alt="Profile image" />
                                             <img className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white" src="./assets/images/avatar/avatar-12.jpg" alt="Profile image" />
                                             <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">4+</div>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                          <div className="flex items-center gap-2">
                                             <div>75%</div>
                                             <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '75%'}}></div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                 </tbody>
                              
                           </div>
                        </div>
                     </div>
                     
                     <div className="card h-full shadow">
                        <div className="border-b border-gray-300 px-5 py-4 flex justify-between items-center">
                           <h4>Tasks Performance</h4>
                           {
                           <div className="dropdown leading-4">
                              <button className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 <i data-feather="more-vertical" className="w-4 h-4"></i>
                              </button>
                              <ul className="dropdown-menu">
                                 <li><a className="dropdown-item" href="#">Action</a></li>
                                 <li><a className="dropdown-item" href="#">Another action</a></li>
                                 <li><a className="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                           </div>
                        </div>
                        
                        <div className="card-body">
                           <div id="perfomanceChart"></div>
                           <div className="flex items-center justify-around py-4">
                              
                              <div className="text-center">
                                 <div className="mb-3">
                                    <i className="w-6 h-6 text-green-500 mx-auto" data-feather="check-circle"></i>
                                 </div>

                                 <span className="text-2xl font-bold text-gray-800">76%</span>
                                 <p className="text-gray-600">Completed</p>
                              </div>
                              
                              <div className="text-center">
                                 <div className="mb-3">
                                    <i className="w-6 h-6 text-yellow-500 mx-auto" data-feather="trending-up"></i>
                                 </div>

                                 <span className="text-2xl font-bold text-gray-800">32%</span>
                                 <p className="text-gray-600">In-Progress</p>
                              </div>
                              
                              <div className="text-center">
                                 <div className="mb-3">
                                    <i className="w-6 h-6 text-red-500 mx-auto" data-feather="trending-down"></i>
                                 </div>
                                 <span className="text-2xl font-bold text-gray-800">13%</span>
                                 <p className="text-gray-600">Behind</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div> */}
                {/* <div className="mx-6 my-6 grid grid-cols-1 lg:grid-cols-2 grid-rows-1 grid-flow-row-dense gap-6">
                     <div>
                        <div className="card h-full shadow">
                           <div className="border-b border-gray-300 px-5 py-4 flex items-center w-full justify-between">
                              
                              <div>
                                 <h4>My Task</h4>
                              </div>
                              <div>
                                 
                                 <div className="dropdown leading-4">
                                    <button
                                       className="btn btn-sm gap-x-2 bg-white text-gray-800 border-gray-300 border disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-700 active:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
                                       type="button"
                                       data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                       Add Task
                                    </button>
                                    
                                    <ul className="dropdown-menu dropdown-menu-end">
                                       <li><a className="dropdown-item" href="#">Action</a></li>
                                       <li><a className="dropdown-item" href="#">Another action</a></li>
                                       <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>

                           <div className="relative overflow-x-auto">
                              
                              <table className="text-left w-full whitespace-nowrap">
                                 <thead className="text-gray-700">
                                    <tr>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Name</th>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Deadline</th>
                                       <th scope="col" className="border-b bg-gray-100 px-6 py-3">Status</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <input
                                                className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                type="checkbox"
                                                id="checkboxOne" />
                                             <label htmlFor="checkboxOne" className="text-base ml-2 text-slate-600">Design a FreshCart Home page</label>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">Today</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-green-100 px-2 py-1 text-green-700 text-sm font-medium rounded-md">Approved</span>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <input
                                                className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                type="checkbox"
                                                id="checkboxTwo" />
                                             <label htmlFor="checkboxTwo" className="text-base ml-2 text-slate-600">Dash UI Dark Version Design</label>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">Yesterday</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-red-100 px-2 py-1 text-red-700 text-sm font-medium rounded-md">Pending</span>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <input
                                                className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                type="checkbox"
                                                id="checkboxThree" />
                                             <label htmlFor="checkboxThree" className="text-base ml-2 text-slate-600">Dash UI landing page design</label>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">16 Sept, 2023</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-yellow-100 px-2 py-1 text-yellow-700 text-sm font-medium rounded-md">In Progress</span>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <input
                                                className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded-md focus:ring-indigo-400 focus:outline-none focus:ring-3 focus:outline-indigo-600"
                                                type="checkbox"
                                                id="checkboxFour" />
                                             <label htmlFor="checkboxFour" className="text-base ml-2 text-slate-600">Next.js Dash UI version</label>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">23 Sept, 2023</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-green-100 px-2 py-1 text-green-700 text-sm font-medium rounded-md">Approved</span>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <input
                                                className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                type="checkbox"
                                                id="checkboxFive" />
                                             <label htmlFor="checkboxFive" className="text-base ml-2 text-slate-600">Develop a Dash UI Laravel</label>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">20 Sept, 2023</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-red-100 px-2 py-1 text-red-700 text-sm font-medium rounded-md">Pending</span>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <input
                                                className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                type="checkbox"
                                                id="checkboxSix" />
                                             <label htmlFor="checkboxSix" className="text-base ml-2 text-slate-600">Coach home page design</label>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">12 Sept, 2023</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-green-100 px-2 py-1 text-green-700 text-sm font-medium rounded-md">Approved</span>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <div className="flex items-center">
                                             <input
                                                className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                type="checkbox"
                                                id="checkboxSeven" />
                                             <label htmlFor="checkboxSeven" className="text-base ml-2 text-slate-600">Develop a Dash UI Laravel</label>
                                          </div>
                                       </td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">11 Sept, 2023</td>
                                       <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                          <span className="bg-red-100 px-2 py-1 text-red-700 text-sm font-medium rounded-md">Pending</span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                     
                     <div className="card h-full shadow">
                        <div className="border-b border-gray-300 px-5 py-4">
                           <h4>Teams</h4>
                        </div>
                        <div className="relative overflow-x-auto" data-simplebar="" style={{maxHeight: '380px'}}>
                           {
                           <table className="text-left w-full whitespace-nowrap">
                              <thead className="text-gray-700">
                                 <tr>
                                    <th scope="col" className="border-b bg-gray-100 px-6 py-3">Name</th>
                                    <th scope="col" className="border-b bg-gray-100 px-6 py-3">Role</th>
                                    <th scope="col" className="border-b bg-gray-100 px-6 py-3">Last Activity</th>
                                    <th scope="col" className="border-b bg-gray-100 px-6 py-3"></th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="flex items-center">
                                          <div>
                                             <a href="#!" className="h-10 w-10 inline-block"><img src="assets/images/avatar/avatar-2.jpg" alt="Image" className="rounded-full" /></a>
                                          </div>
                                          <div className="ml-3 leading-4">
                                             <h5 className="mb-1"><a href="#!">Anita Parmar</a></h5>
                                             <p className="mb-0 text-gray-500">anita@example.com</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">Front End Developer</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">3 May, 2023</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="dropdown leading-4">
                                          <button className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             <i data-feather="more-vertical" className="w-4 h-4"></i>
                                          </button>
                                          <ul className="dropdown-menu">
                                             <li><a className="dropdown-item" href="#">Action</a></li>
                                             <li><a className="dropdown-item" href="#">Another action</a></li>
                                             <li><a className="dropdown-item" href="#">Something else here</a></li>
                                          </ul>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="flex items-center">
                                          <div>
                                             <a href="#!" className="h-10 w-10 inline-block">
                                                <img src="assets/images/avatar/avatar-3.jpg" alt="Image" className="rounded-full" />
                                             </a>
                                          </div>
                                          <div className="ml-3 leading-4">
                                             <h5 className="mb-1"><a href="#!">Jitu Chauhan</a></h5>
                                             <p className="mb-0 text-gray-500">jituchauhan@example.com</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">Project Director</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">Today</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="dropdown leading-4">
                                          <button className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             <i data-feather="more-vertical" className="w-4 h-4"></i>
                                          </button>
                                          <ul className="dropdown-menu">
                                             <li><a className="dropdown-item" href="#">Action</a></li>
                                             <li><a className="dropdown-item" href="#">Another action</a></li>
                                             <li><a className="dropdown-item" href="#">Something else here</a></li>
                                          </ul>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="flex items-center">
                                          <div>
                                             <a href="#!" className="h-10 w-10 inline-block"><img src="assets/images/avatar/avatar-2.jpg" alt="Image" className="rounded-full" /></a>
                                          </div>
                                          <div className="ml-3 leading-4">
                                             <h5 className="mb-1"><a href="#!">Sandeep Chauhan</a></h5>
                                             <p className="mb-0 text-gray-500">sandeepchauhan@example.com</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">Full- Stack Developer</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">Yesterday</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="dropdown leading-4">
                                          <button className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             <i data-feather="more-vertical" className="w-4 h-4"></i>
                                          </button>
                                          <ul className="dropdown-menu">
                                             <li><a className="dropdown-item" href="#">Action</a></li>
                                             <li><a className="dropdown-item" href="#">Another action</a></li>
                                             <li><a className="dropdown-item" href="#">Something else here</a></li>
                                          </ul>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="flex items-center">
                                          <div>
                                             <a href="#!" className="h-10 w-10 inline-block"><img src="assets/images/avatar/avatar-5.jpg" alt="Image" className="rounded-full" /></a>
                                          </div>
                                          <div className="ml-3 leading-4">
                                             <h5 className="mb-1"><a href="#!">Amanda Darnell</a></h5>
                                             <p className="mb-0 text-gray-500">amandadarnell@example.com</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">Digital Marketer</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">3 May, 2023</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="dropdown leading-4">
                                          <button className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             <i data-feather="more-vertical" className="w-4 h-4"></i>
                                          </button>
                                          <ul className="dropdown-menu">
                                             <li><a className="dropdown-item" href="#">Action</a></li>
                                             <li><a className="dropdown-item" href="#">Another action</a></li>
                                             <li><a className="dropdown-item" href="#">Something else here</a></li>
                                          </ul>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="flex items-center">
                                          <div>
                                             <a href="#!" className="h-10 w-10 inline-block"><img src="assets/images/avatar/avatar-6.jpg" alt="Image" className="rounded-full" /></a>
                                          </div>
                                          <div className="ml-3 leading-4">
                                             <h5 className="mb-1"><a href="#!">Patricia Murrill</a></h5>
                                             <p className="mb-0 text-gray-500">patriciamurrill@example.com</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">Account Manager</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">3 May, 2023</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="dropdown leading-4">
                                          <button className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             <i data-feather="more-vertical" className="w-4 h-4"></i>
                                          </button>
                                          <ul className="dropdown-menu">
                                             <li><a className="dropdown-item" href="#">Action</a></li>
                                             <li><a className="dropdown-item" href="#">Another action</a></li>
                                             <li><a className="dropdown-item" href="#">Something else here</a></li>
                                          </ul>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="flex items-center">
                                          <div>
                                             <a href="#!" className="h-10 w-10 inline-block"><img src="assets/images/avatar/avatar-7.jpg" alt="Image" className="rounded-full" /></a>
                                          </div>
                                          <div className="ml-3 leading-4">
                                             <h5 className="mb-1"><a href="#!">Darshini Nair</a></h5>
                                             <p className="mb-0 text-gray-500">darshininair@example.com</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">Front End Developer</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">3 May, 2023</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="dropdown leading-4">
                                          <button className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             <i data-feather="more-vertical" className="w-4 h-4"></i>
                                          </button>
                                          <ul className="dropdown-menu">
                                             <li><a className="dropdown-item" href="#">Action</a></li>
                                             <li><a className="dropdown-item" href="#">Another action</a></li>
                                             <li><a className="dropdown-item" href="#">Something else here</a></li>
                                          </ul>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="flex items-center">
                                          <div>
                                             <a href="#!" className="h-10 w-10 inline-block"><img src="assets/images/avatar/avatar-8.jpg" alt="Image" className="rounded-full" /></a>
                                          </div>
                                          <div className="ml-3 leading-4">
                                             <h5 className="mb-1"><a href="#!">Patricia Murrill</a></h5>
                                             <p className="mb-0 text-gray-500">patriciamurrill@example.com</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">Account Manager</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">3 May, 2023</td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                       <div className="dropdown leading-4">
                                          <button className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             <i data-feather="more-vertical" className="w-4 h-4"></i>
                                          </button>
                                          <ul className="dropdown-menu">
                                             <li><a className="dropdown-item" href="#">Action</a></li>
                                             <li><a className="dropdown-item" href="#">Another action</a></li>
                                             <li><a className="dropdown-item" href="#">Something else here</a></li>
                                          </ul>
                                       </div>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div> */}
            </AuthenticatedLayout>
        </>
    );
};

export default Dashboard;
