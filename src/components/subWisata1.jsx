import React from "react";
import { Link } from "react-router-dom";

const subWisata = ({img, tempat, deskripsi}) => {
    return(
        <>
        <div className="mb-5 mx-4 xl:mb-8">
            <div className="hidden md:block md:space-y-4 xl:mx-10 xl:space-y-7">
                <h1 className="md:text-2xl lg:text-3xl">{tempat}</h1>
                <div className="md:flex md:space-x-3 xl:justify-between">
                    <img src={img} alt="" className="md:w-80 lg:w-fit"/>
                    <h1 className="lg:text-xl">{deskripsi}</h1>
                </div>
            </div>
        </div>
        </>
    );
}

export default subWisata;