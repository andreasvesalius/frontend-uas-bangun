import React from "react";
// import { Link } from "react-router-dom";

const SubWisata = ({img, tempat, deskripsi}) => {
    return(
        <>
        <div className="mb-20 mx-1 ">
            <div className="md:space-y-4 xl:mx-1 xl:space-y-7">
                <h1 className="text-right md:text-left text-md pb-2 font-medium md:text-2xl lg:text-3xl">{tempat}</h1>
                <div className="md:flex md:space-x-3">
                    <img src={img} alt="" className="w-full md:w-1/2"/>
                    <h1 className="text-center md:text-justify lg:text-xl xl:text-3xl">{deskripsi}</h1>
                </div>
            </div>
        </div>
        </>
    );
}

export default SubWisata;