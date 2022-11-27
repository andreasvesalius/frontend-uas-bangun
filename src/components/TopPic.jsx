import React from "react";
import Rectangle from '../assets/rectangle.png';

const TopPic = () => {
    return(
        <>
        <div className="py-2 relative mx-1">
            <img src={Rectangle} alt="" className="rounded-lg h-full w-full"/>
            <div className="absolute top-0 container text-center">
                <h1 className="font-semibold text-[30px] pt-2">Manjo Pasiar</h1>
                <p className="text-[17px]">Mari Berkunjung</p>
                <p className="pt-2 text-[13px] text-slate-500 ">Selamat datang di Website ManjoPasiar <br />
                Website yang menyediakan <br /> informasi rekomendasi destinasi wisata <br /> di Kota Manado bagi anda.</p>
            </div>
        </div>
    </>
    )
};

export default TopPic;