import React from "react";

const NavBar = () => {
    return(
        <>
        <div className=" bg-[#D9D9D9] rounded-b-lg">
            <div className="flex justify-between py-2 px-3">
                <h1 className="">Manjo Pasiar</h1>
                <nav className="">
                    <ul className="flex space-x-3">
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
    )
};

export default NavBar;