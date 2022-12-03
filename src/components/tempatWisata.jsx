import React from "react";
import { Link } from "react-router-dom";

const tempatWisata = ({img, destinasi, deskripsi}) => {
    return(
        <>
        <div className="mb-5 mx-1 space-y-3 lg:mb-10">
            <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl xl:text-5xl text-center mt-2">{destinasi}</h1>
            <img src={img} alt="" className="w-full rounded-lg" />
            <h1 className="text-center lg:text-2xl xl:text-3xl ">{deskripsi}</h1>
            {/* <h1 className="text-left">{destinasi}</h1> */}
        </div>
        </>
    );
}

export default tempatWisata;