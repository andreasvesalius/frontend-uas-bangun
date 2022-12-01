import React from "react";
import Rectangle from '../assets/rectangle.png';

const TopPic = () => {
    return(
        <>
        <div className="py-2 relative mx-1">
            <img src={Rectangle} alt="" className="rounded-lg h-48 w-full"/>
            <div className="absolute container top-0 text-center md:flex md:justify-between md:text-left xl:w-max-[1540px]">
                <div className="md:p-7">
                    <h1 className="font-semibold text-[30px] pt-2 md:text-[40px] xl:w-[250px]">Manjo Pasiar </h1>
                    <p className="text-[17px] md:text-[20px]">Mari Berkunjung</p>
                </div>
                <div className="w-max mx-auto">
                    <p className="pt-2 text-[13p} text-slate-500 md:text-right md:pl-36 md:pt-10 lg:pl-96 md:text-[15px] xl:w-[1100px]">Selamat datang di Website ManjoPasiar <br />
                    Website yang menyediakan <br /> informasi rekomendasi destinasi wisata <br /> di Kota Manado bagi anda.</p>
                </div>
            </div>
        </div>
    </>
    )
};

export default TopPic;