import React from "react";
import { Link } from "react-router-dom";

const tempatWisata = ({img, destinasi, deskripsi, id}) => {
    return(
        <>
        <div className="mb-5 mx-1 space-y-3 lg:mb-10 xl:mb-24 pt-2">
            <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl xl:text-5xl text-center md:text-justify mt-2 xl:mt-4 xl:mb-6">{destinasi}</h1>
            <div className="relative">
                <img src={img} alt="" className="w-full rounded-lg" />
                <h1 className="md:absolute md:bottom-5 md:mx-5 md:px-2 md:rounded-lg md:bg-slate-400 md:text-white text-center md:text-justify lg:text-md xl:text-3xl py-1">{deskripsi}</h1>
            </div>
        </div>
        </>
    );
}

export default tempatWisata;