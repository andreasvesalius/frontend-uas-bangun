import React from "react";
import whats from "../assets/whatsapp.png"

const Footer = () => {
    return(
        <>
        <div className="rounded-xl bg-[#D9D9D9] py-3 font-medium mx-1">
            <div className="flex-cols px-4 rouunded-xl md:flex justify-between">
                <div className="my-auto text-center hidden md:block">
                    <h1 className="text-[18px] md:text-[27px]">Manjo Pasiar</h1>
                    <p className="text-[15px] md:text-[22px]">Manado, Sulawesi Utara</p>
                </div>
                <div className="md:my-auto">
                    <h2 className="text-center text-[20px] pb-2 md:text-[27px]">Hubungi Kami</h2>
                    <div className="bg-[#868686] rounded-lg mt-2 md:px-4 md:py-2 mb-2 py-2">
                        <img src={whats} alt="" className="md:hidden w-[30px] h-[30px] mx-auto mb-2" />
                        <div className="flex justify-evenly pb-2">
                            <img src={whats} alt="" className="w-[20px] h-[20px] mt-1 mr-2 md:w-[30px] md:h-[30px] hidden md:block"/>
                            <div className="flex md:space-x-10 ">
                                <p className="md:text-[22px] md:font-semibold">Veron</p>
                                <p className="text-[12px] md:text-[18px] pt-1">+62 123-123-123</p>
                            </div>
                        </div>
                        <div className="flex justify-evenly">
                            <img src={whats} alt="" className="w-[20px] h-[20px] mt-1 mr-2 md:w-[30px] md:h-[30px] hidden md:block"/>
                            <div className="flex md:space-x-5">
                                <p className="md:text-[22px] md:font-semibold">Ignatius</p>
                                <p className="text-[12px] md:text-[18px] pt-1">+62 123-123-123</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-auto text-center pt-2 md:hidden">
                    <h1 className="text-[20px]">ManjoPasiar</h1>
                    <p className="text-[15px]">Manado, Sulawesi Utara</p>
                </div>
            </div>
        </div>
        <div className="bg-[#868686] text-center mt-2 rounded-t-xl">
            <p className="font-semibold md:text-[20px]">Copyright © 2022 All Right Reserved || ManjoPasiar</p>
        </div>
    </>
    )
};

export default Footer;