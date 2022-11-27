import React from "react";
import View from "../assets/view.png";

const DestiNasi = () => {
    return(
        <>
        <div className="bg-[#D9D9D9] rounded-xl text-center m-1 pb-1 font-semibold text-[20px]">
            <h1>Destinasi Wisata di Kota Manado</h1>
        </div>
        <div className="grid grid-cols-1 mx-0">
            <div className="relative ">
                <img src={View} alt="" className="rounded-xl pb-1 pl-1 pr-1 pt-1" />
                <h2 className="absolute bottom-3 left-3 text-white font-bold">Destinasi 1</h2>
            </div>
            <div className="relative ">
                <img src={View} alt="" className="rounded-xl p-1" />
                <h2 className="absolute bottom-3 left-3 text-white font-bold">Destinasi 2</h2>
            </div>
            <div className="relative ">
                <img src={View} alt="" className="rounded-xl p-1"/>
                <h2 className="absolute bottom-3 left-3 text-white font-bold">Destinasi 3</h2>
            </div>
            <div className="relative ">
                <img src={View} alt="" className="rounded-xl pt-1 pl-1 pr-1"/>
                <h2 className="absolute bottom-3 left-3 text-white font-bold">Destinasi 4</h2>
            </div>
        </div>
    </>
    )
};

export default DestiNasi;