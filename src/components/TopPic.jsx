import React from "react";
import manado from '../assets/copy.jpg';

const TopPic = () => {
    return(
        <>
        <div className="py-2 relative mx-1">
            <img src={manado} alt="" className="rounded-lg md:h-auto lg:w-[1100px] xl:w-[1600px] xl:h-[790px]"/>
            <div className="absolute container top-0 text-center md:flex md:justify-between md:text-left xl:w-max-[1540px]">
                <div className="md:p-7">
                    <h1 className="font-semibold text-[30px] pt-2 md:text-[40px] xl:text-[100px] xl:w-[800px]">Manjo Pasiar </h1>
                    <p className="text-[17px] md:text-[20px] xl:text-[30px]">Mari Berkunjung</p>
                </div>
                <div className="w-max mx-auto">
                    <p className="pt-2 text-[13px] text-white md:text-right md:pl-36 md:pt-10 lg:pl-96 xl:pl-0 xl:pt-[75px] md:text-[15px] xl:w-[550px] xl:text-[22px]">Selamat datang di Website ManjoPasiar <br />
                    Website yang menyediakan <br /> informasi rekomendasi destinasi wisata <br /> di Kota Manado bagi anda.</p>
                </div>
            </div>
        </div>
    </>
    )
};

export default TopPic;