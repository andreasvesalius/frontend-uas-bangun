import React from "react";
import Rectangle from '../assets/rectangle.png';

const TopPic = () => {
    return(
        <>
        <div className="py-2 relative mx-1">
            <img src={Rectangle} alt="" className="rounded-lg h-40 w-full"/>
            <div className="absolute top-0 container text-center md:flex md:justify-between md:text-left">
                <div className="md:p-7">
                    <h1 className="font-semibold text-[30px] pt-2 md:text-[40px]">Manjo Pasiar</h1>
                    <p className="text-[17px] md:text-[20px]">Mari Berkunjung</p>
                </div>
                <p className="pt-2 text-[13px] text-slate-500 md:text-right md:p-10 md:text-[15px]">Selamat datang di Website ManjoPasiar <br />
                Website yang menyediakan <br /> informasi rekomendasi destinasi wisata <br /> di Kota Manado bagi anda.</p>
            </div>
        </div>
    </>
    )
};

export default TopPic;