import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const DestiNasi = ({img, destinasi}) => {


    const [wisata1, setWisata] = useState([]);

    useEffect(() =>{
        getWisata1();
    },[]);

    const getWisata1 = async() => {
        const response = await axios.get("http://localhost:5000/wisata/1");
        setWisata(response.data);
    }
    const [wisata2, setWisata1] = useState([]);

    useEffect(() =>{
        getWisata2();
    },[]);

    const getWisata2 = async() => {
        const response = await axios.get("http://localhost:5000/wisata/4");
        setWisata1(response.data);
    }
    const [wisata3, setWisata2] = useState([]);

    useEffect(() =>{
        getWisata3();
    },[]);

    const getWisata3 = async() => {
        const response = await axios.get("http://localhost:5000/wisata/7");
        setWisata2(response.data);
    }
    const [wisata4, setWisata3] = useState([]);

    useEffect(() =>{
        getWisata4();
    },[]);

    const getWisata4 = async() => {
        const response = await axios.get("http://localhost:5000/wisata/10");
        setWisata3(response.data);
    }

    return(
        <>}
        <div className="md:grid md:grid-cols-2">
            <div className="bg-[#FFF7E9] rounded-lg">
                <div key={wisata1.id} className="relative">
                    <Link to={'/detailWisata'}> <img src={wisata1.url} alt="" className="rounded-xl p-1 w-full  " /> </Link>
                    <h2 className="absolute bottom-3 left-3 text-white font-bold lg:text-[25px] xl:text-[32px]">{wisata1.nama}</h2>
                </div>
            </div>
            <div className="bg-[#FFF7E9] rounded-lg">
                <div key={wisata2.id} className="relative">
                    <Link to={'/detailWisata'}> <img src={wisata2.url} alt="" className="rounded-xl p-1 w-full  " /> </Link>
                    <h2 className="absolute bottom-3 left-3 text-white font-bold lg:text-[25px] xl:text-[32px]">{wisata2.nama}</h2>
                </div>
            </div>
            <div className="bg-[#FFF7E9] rounded-lg">
                <div key={wisata3.id=1} className="relative">
                    <Link to={'/detailWisata'}> <img src={wisata3.url} alt="" className="rounded-xl p-1 w-full h-[290px] lg:h-[385px] xl:h-[540px] 2xl:h-[960px] " /> </Link>
                    <h2 className="absolute bottom-3 left-3 text-white font-bold lg:text-[25px] xl:text-[32px]">{wisata3.nama}</h2>
                </div>
            </div>
            <div className="bg-[#FFF7E9] rounded-lg">
                <div key={wisata4.id=1} className="relative">
                    <Link to={'/detailWisata'}> <img src={wisata4.url} alt="" className="rounded-xl p-1 w-full  " /> </Link>
                    <h2 className="absolute bottom-3 left-3 text-white font-bold lg:text-[25px] xl:text-[32px]">{wisata4.nama}</h2>
                </div>
            </div>
        </div>
    </>
    )
};

export default DestiNasi;