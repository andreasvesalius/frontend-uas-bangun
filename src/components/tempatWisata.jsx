import React from "react";
import { Link } from "react-router-dom";

const tempatWisata = ({img, destinasi, deskripsi}) => {
    return(
        <>
        <div className="mb-5">
        <h1>{destinasi}</h1>
            <img src={img} alt="" />
            <h1>{deskripsi}</h1>
            {/* <h1 className="text-left">{destinasi}</h1> */}
        </div>
        </>
    );
}

export default tempatWisata;