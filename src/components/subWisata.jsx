import React from "react";
import { Link } from "react-router-dom";

const subWisata = ({img, tempat, deskripsi}) => {
    return(
        <>
        <div className="mb-20 mx-4">
            <div className="space-y-3 md:hidden mb-8">
                <h1>{tempat}</h1>
                <img src={img} alt="" className=""/>
                <h1>{deskripsi}</h1>
            </div>

            <div className="hidden md:block md:space-y-4 xl:mx-10 xl:space-y-7">
                <h1 className="md:text-2xl lg:text-3xl">{tempat}</h1>
                <div className="md:flex lg:space-x-3 xl:justify-between ">
                    <h1 className="lg:text-xl">{deskripsi}</h1>
                    <img src={img} alt="" className="md:w-80 lg:w-fit"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default subWisata;