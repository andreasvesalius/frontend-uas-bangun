import React from "react";
import Search from "../assets/search.png";
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <>
        <div className=" bg-[#D9D9D9] rounded-b-lg font-semibold">
            <div className="flex justify-between py-2 px-3 xl:py-4 xl:px-7">
                <h1 className="md:text-[20px] text-[18px] pt-1 font-bold xl:text-[30px]"> <Link to={'/'}>ManjoPasiar</Link></h1>
                <nav className="">
                    <ul className="space-x-3 md:text-[20px] hidden md:flex xl:text-[30px] xl:space-x-6">
                        <li><Link to={'/'}>Beranda</Link></li>
                        <li><Link to={'/detailWisata'}>Tentang Kami</Link></li>
                    </ul>
                </nav>
                <div className="flex bg-white w-f rounded-3xl p-1 md:hidden">
                    <p className="pr-10 pl-1" >Cari...</p>
                    <img src={Search} alt="" className="w-[25px] h-[25px] mr-1"/>
                </div>
            </div>
        </div>
    </>
    )
};

export default NavBar;