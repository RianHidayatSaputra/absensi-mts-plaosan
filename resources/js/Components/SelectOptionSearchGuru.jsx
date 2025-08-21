import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const SelectOptionSearchGuru = ({ guru, onChange, error }) => {
    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const filteredGuru = guru.filter((val) =>
        val.nama.toLowerCase().includes(search.toLowerCase()),
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Search Input */}
            <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                placeholder="Cari guru..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setShowDropdown(true)}
            />

            {/* Dropdown */}
            {showDropdown && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full max-h-40 overflow-y-auto shadow-md">
                    {filteredGuru.length > 0 ? (
                        filteredGuru.map((value) => (
                            <li
                                key={value.id}
                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    onChange(value.id);
                                    setSearch(value.nama);
                                    setShowDropdown(false);
                                }}
                            >
                                {value.nama}
                            </li>
                        ))
                    ) : (
                        <li className="px-3 py-2 text-gray-500">
                            Tidak ditemukan
                        </li>
                    )}
                </ul>
            )}

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
    );
};

export default SelectOptionSearchGuru;
