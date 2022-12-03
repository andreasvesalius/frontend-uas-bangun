import React from "react";
// import { Link } from "react-router-dom";

const subWisata = ({img, tempat, deskripsi}) => {
    return(
        <>
        <div className="mb-20 mx-1 mt-14">
            <div className="md:space-y-4 xl:mx-1 xl:space-y-7">
                <h1 className="text-md font-medium pb-2 md:text-2xl md:text-right lg:text-3xl">{tempat}</h1>
                <div className="md:flex md:flex-row-reverse">
                    <img src={img} alt="" className="w-full md:w-1/2"/>
                    <h1 className="lg:text-xl xl:text-3xl text-center md:text-justify px-2">{deskripsi}</h1>
                </div>
            </div>
        </div>
        </>
    );
}

export default subWisata;