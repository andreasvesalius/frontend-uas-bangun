import React from "react";
import { Link } from "react-router-dom";

const subWisata = ({img, subTempat, deskripsi}) => {
    return(
        <>
        <div className="mb-5">
            <h1>{subTempat}</h1>
            <h1>{deskripsi}</h1>
            <img src={img} alt="" />

            <h1>{subTempat}</h1>
            <h1>{deskripsi}</h1>
            <img src={img} alt="" />

            <div className="hidden md:block">
                <div>
                    <h1>{subTempat}</h1>
                    <div className="md:flex">
                        <h1>{deskripsi}</h1>
                        <img src={img} alt="" />
                    </div>
                </div>
                
                <div>
                    <h1>{subTempat}</h1>
                    <div className="md:flex">
                        <img src={img} alt="" />
                        <h1>{deskripsi}</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default subWisata;