import React from "react";
import { Link } from "react-router-dom";
import kawas from "../assets/kawasan.jpeg";
import mbw from "../assets/mbw.jpg";
import gbp from "../assets/gbp.jpg";
import tum from "../assets/tumin.jpg";

const DestiNasi = ({img, destinasi}) => {

    return(
        <>
        <div className="md:grid md:grid-cols-2">
            <div className="bg-[#FFF7E9] rounded-lg">
                <div className="relative ">
                    <Link to={'/detailWisata'}> <img src={mbw} alt="" className="rounded-xl p-1 w-full  " /> </Link>
                    <h2 className="absolute bottom-3 left-3 text-white font-bold lg:text-[25px] xl:text-[32px]">Malalayang Beach walk</h2>
                </div>
            </div>
            <div className="bg-[#FFF7E9] rounded-lg">
                <div className="relative ">
                    <Link to={'/detailWisata'}> <img src={gbp} alt="" className="rounded-xl p-1 w-full" /> </Link>
                    <h2 className="absolute bottom-3 left-3 text-white font-bold lg:text-[25px] xl:text-[32px]">God Bless Park</h2>
                </div>
            </div>
            <div className="bg-[#FFF7E9] rounded-lg">
                <div className="relative ">
                    <Link to={'/detailWisata'}> <img src={kawas} alt="" className="rounded-xl p-1 w-full h-[290px] lg:h-[385px] xl:h-[540px] 2xl:h-[960px]" /> </Link>
                    <h2 className="absolute bottom-3 left-3 text-white font-bold lg:text-[25px] xl:text-[32px]">Kawasan Megamas</h2>
                </div>
            </div>
            <div className="bg-[#FFF7E9] rounded-lg">
                <div className="relative ">
                    <Link to={'/detailWisata'}> <img src={tum} alt="" className="rounded-xl p-1 w-full" /> </Link>
                    <h2 className="absolute bottom-3 left-3 text-white font-bold lg:text-[25px] xl:text-[32px]">Boulevard Tuminting</h2>
                </div>
            </div>
        </div>
    </>
    )
};

export default DestiNasi;