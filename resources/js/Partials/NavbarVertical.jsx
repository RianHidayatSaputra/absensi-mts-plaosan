import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faUserGear,
    faUserGraduate,
    faCalendarDay,
    faUmbrellaBeach,
    faDashboard,
    faBookOpenReader,
    faBookOpen,
    faMedal,
    faGears,
    faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import Logo from "../images/sima.png";

const NavbarVertical = ({ user }) => {
    const props = usePage();

    return (
        <nav className="navbar-vertical navbar">
            <div
                id="myScrollableElement"
                className="h-screen overflow-y-scroll pb-5"
                data-simplebar
            >
                {/* brand logo  */}
                <Link className="navbar-brand" href={route("dashboard")}>
                    <img src={Logo} alt="" className="img-fluid w-100 h-100" />
                </Link>

                {/* navbar nav  */}
                <ul className="navbar-nav flex-col" id="sideNavbar">
                    {user.role == "admin" || user.user.role == "admin" ? (
                        <>
                            <li className="nav-item">
                                <Link
                                    href={route("dashboard")}
                                    className={
                                        props.url == "/dashboard"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faDashboard}
                                        className="mr-1"
                                    />
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="navbar-heading">
                                    Master Data
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("user.index")}
                                    className={
                                        props.url == "/user"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faUserGear}
                                        className="mr-1"
                                    />
                                    User
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("kelas.index")}
                                    className={
                                        props.url == "/kelas"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faBookOpenReader}
                                        className="mr-1"
                                    />
                                    Kelas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("kontrak-guru.index")}
                                    className={
                                        props.url == "/kontrak-guru"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faCalendarDay}
                                        className="mr-1"
                                    />
                                    Kontrak Guru
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("guru.index")}
                                    className={
                                        props.url == "/guru"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faUserGraduate}
                                        className="mr-1"
                                    />
                                    Guru
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("siswa.index")}
                                    className={
                                        props.url == "/siswa"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faUsers}
                                        className="mr-1"
                                    />
                                    Siswa
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("pindah-kelas.create")}
                                    className={
                                        props.url == "/pindah-kelas/create"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowRightArrowLeft}
                                        className="mr-1"
                                    />
                                    Pindah Kelas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("pindah-kelas.index")}
                                    className={
                                        props.url == "/pindah-kelas"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faUserGraduate}
                                        className="mr-1"
                                    />
                                    Alumni
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link
                                    href={route("hari-libur.index")}
                                    className={
                                        props.url == "/hari-libur"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faUmbrellaBeach}
                                        className="mr-1"
                                    />
                                    Hari Libur
                                </Link>
                            </li> */}

                            <li className="nav-item">
                                <div className="navbar-heading">
                                    Rekapan Absen
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("rekap-guru.index")}
                                    className={
                                        props.url == "/rekap-guru"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faBookOpenReader}
                                        className="mr-1"
                                    />
                                    Absen Guru
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("rekap-siswa.index")}
                                    className={
                                        props.url == "/rekap-siswa"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faBookOpen}
                                        className="mr-1"
                                    />
                                    Absen Siswa
                                </Link>
                            </li>

                            {/* <li className="nav-item">
                                <div className="navbar-heading">Broadcast</div>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("broadcast.index")}
                                    className={
                                        props.url == "/broadcast/nilai-sumatif"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className="mr-1"
                                    />
                                    Nilai Sumatif
                                </Link>
                            </li> */}

                            <li className="nav-item">
                                <div className="navbar-heading">Setting</div>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("setting.index")}
                                    className={
                                        props.url == "/setting"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faGears}
                                        className="mr-1"
                                    />
                                    Setting
                                </Link>
                            </li>
                        </>
                    ) : user.role === "bendahara" ||
                      user.user.role === "bendahara" ? (
                        <>
                            <li className="nav-item">
                                <Link
                                    href={route("dashboard")}
                                    className={
                                        props.url == "/dashboard"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faDashboard}
                                        className="mr-1"
                                    />
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="navbar-heading">
                                    Rekapan Absen
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("rekap-guru.index")}
                                    onClick={() => checkNotAllTeachers()}
                                    className={
                                        props.url == "/rekap-guru"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faBookOpenReader}
                                        className="mr-1"
                                    />
                                    Absen Guru
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link
                                    href={route("rekap-semua-guru")}
                                    onClick={() => checkAllTeachers()}
                                    className={
                                        props.url == "/rekap-semua-guru"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faFileAlt}
                                        className="mr-1"
                                    />
                                    Absen Semua Guru
                                </Link>
                            </li> */}
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <div className="navbar-heading">
                                    Rekapan Absen
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("rekap-guru.index")}
                                    className={
                                        props.url == "/rekap-guru"
                                            ? "nav-link active border-none"
                                            : "nav-link border-none"
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faBookOpenReader}
                                        className="mr-1"
                                    />
                                    Absen Guru
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default NavbarVertical;
