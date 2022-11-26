import React from "react";
import Rectangle from '../assets/rectangle.png';

const TopPic = () => {
    return(
        <>
        <div className="my-2 relative mx-2">
            <img src={Rectangle} alt="" className="rounded-lg" />
            <div className="absolute top-0 container text-center">
                <h1 className="font-semibold text-[30px] pt-2">Manjo Pasiar</h1>
                <p>Mari Berkunjung</p>
                <p className="pt-2 text-[12px] text-slate-500 ">Selamat datang di web ManjoPasiar</p>
            </div>
        </div>
    </>
    )
};

export default TopPic;