import React from "react";
import { Link } from "react-router-dom";

const DestiNasi = ({img, destinasi}) => {
    return(
        <>
        <div>
            <div className="relative">
                <Link to={'/detailWisata'}> <img src={img} alt="" className="rounded-xl p-1 w-full" /> </Link>
                <h2 className="absolute bottom-3 left-3 text-white font-bold">{destinasi}</h2>
            </div>
        </div>
    </>
    )
};

export default DestiNasi;