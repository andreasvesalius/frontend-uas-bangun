import React from "react";

const Footer = () => {
    return(
        <>
        <div className="bg-[#D9D9D9] rounded-t-lg">
            <div className="flex justify-between px-6">
                <h1 className="pt-10 pl-16">Manjo Pasiar</h1>
                <div className="">
                    <h2>Hubungi Kami</h2>
                    <div className="bg-[#868686] rounded-lg space-y-2 mt-2 px-4 py-2">
                        <p>Veron - ...</p>
                        <p>Ignatius - ...</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#868686] text-center mt-3">
                <p>Copyright © 2022 . All Right Reserved  . ManjoPasiar</p>
            </div>
        </div>
    </>
    )
};

export default Footer;