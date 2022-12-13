import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubWisata = ({img, destinasi, deskripsi}) => {

    const { id } = useParams();
    const [divWisata, setDivWisata] = useState("");

    const getDivWisata = async () => {
        try {
        const response = await axios.get(`http://localhost:5000/divwisata/${id}`);
        setDivWisata(response.data);
        } catch (error) {
        console.log(error);
        }   
    };

    useEffect(() => {
        getDivWisata();
    }, []);

    return(
        <>
        <div className="mb-10 md:mb-20 mx-1 ">
            <div className="md:space-y-4 xl:mx-1 xl:space-y-7">
                <h1 className="text-right md:text-left text-md pb-2 font-medium md:text-2xl lg:text-3xl text-[25px]">{divWisata.nama}</h1>
                <div className="md:flex md:space-x-3">
                    <img src={divWisata.url} alt="" className="w-full md:w-1/2 rounded-lg "/>
                    <h1 className="text-center md:text-justify lg:text-xl xl:text-3xl bg-slate-300 rounded-lg text-[20px] pt-2 px-2 mt-2 md:mt-0">{divWisata.deskripsi}</h1>
                </div>
            </div>
        </div>
        </>
    );
}

export default SubWisata;