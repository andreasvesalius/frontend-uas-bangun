import React from "react";
import View from "../assets/view.png";

const DestiNasi = () => {
    return(
        <>
        <div className="grid grid-cols-2 mx-2">
            <div className="relative ">
                <img src={View} alt="" className="rounded-tl-lg" />
                <h2 className="absolute bottom-3 left-3 text-white font-bold">Destinasi 1</h2>
            </div>
            <div className="relative ">
                <img src={View} alt="" className="rounded-tr-lg" />
                <h2 className="absolute bottom-3 left-3 text-white font-bold">Destinasi 2</h2>
            </div>
            <div className="relative ">
                <img src={View} alt="" className="rounded-bl-lg"/>
                <h2 className="absolute bottom-3 left-3 text-white font-bold">Destinasi 3</h2>
            </div>
            <div className="relative ">
                <img src={View} alt="" className="rounded-br-lg"/>
                <h2 className="absolute bottom-3 left-3 text-white font-bold">Destinasi 4</h2>
            </div>
        </div>
    </>
    )
};

export default DestiNasi;