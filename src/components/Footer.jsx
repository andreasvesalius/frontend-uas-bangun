import React from "react";

const Footer = () => {
    return(
        <>
        <div className="rounded-xl bg-[#D9D9D9] mx-1 py-3 font-medium">
            <div className=" flex justify-between px-4 rouunded-xl">
                <h1 className="pt-10">Manjo Pasiar</h1>
                <div className="text-center">
                    <h2>Hubungi Kami</h2>
                    <div className="bg-[#868686] rounded-lg space-y-2 mt-2 px-4 py-2">
                        <p>Veron - +62</p>
                        <p>Ignatius - +62</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#868686] text-center mt-2 rounded-t-xl">
            <p className="font-semibold">Copyright © 2022 || All Right Reserved <br /> ManjoPasiar</p>
        </div>
    </>
    )
};

export default Footer;