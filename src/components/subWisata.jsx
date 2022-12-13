import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubWisata = ({img, destinasi, deskripsi}) => {

    const { id } = useParams();
    const [subWisata, setSubWisata] = useState("");

    const getSubWisata = async () => {
        try {
        const response = await axios.get(`http://localhost:5000/subwisata/${id}`);
        setSubWisata(response.data);
        } catch (error) {
        console.log(error);
        }   
    };

    useEffect(() => {
        getSubWisata();
    }, []);

    return(
        <>
        <div className="mb-10 md:mb-20 mx-1 mt-14">
            <div className="md:space-y-4 xl:mx-1 xl:space-y-7">
                <h1 className="text-md font-medium pb-2 md:text-2xl md:text-right lg:text-3xl text-[25px]">{subWisata.nama}</h1>
                <div className="md:flex md:flex-row-reverse ">
                    <img src={subWisata.url} alt="" className="w-full md:w-1/2 rounded-xl"/>
                    <h1 className="lg:text-xl xl:text-3xl text-center md:text-justify px-2 text-[20px] bg-slate-300 rounded-lg md:mr-3 pt-2 mt-2 md:mt-0 ">{subWisata.deskripsi}</h1>
                </div>
            </div>
        </div>
        </>
    );
}

export default SubWisata;