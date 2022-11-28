import React from "react";

const NavBar = () => {
    return(
        <>
        <div className=" bg-[#D9D9D9] rounded-b-lg font-semibold">
            <div className="flex justify-between py-2 px-3">
                <h1 className="md:text-[20px]">Manjo Pasiar</h1>
                <nav className="">
                    <ul className="flex space-x-3 md:text-[20px]">
                        <li><a href="1">Beranda</a></li>
                        <li><a href="1">Tentang Kami</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
    )
};

export default NavBar;