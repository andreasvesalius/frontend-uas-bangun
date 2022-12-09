import React from "react";
import { Link } from "react-router-dom";

const DestiNasi = ({img, destinasi}) => {
    return(
        <>
        <div className="bg-[#FFF7E9] rounded-lg">
            <div className="relative ">
                <Link to={'/detailWisata'}> <img src={img} alt="" className="rounded-xl p-1 w-full" /> </Link>
                <h2 className="absolute bottom-3 left-3 text-white font-bold lg:text-[25px] xl:text-[32px]">{destinasi}</h2>
            </div>
        </div>
    </>
    )
};

export default DestiNasi;