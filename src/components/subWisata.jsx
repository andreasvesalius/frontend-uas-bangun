import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubWisata = ({img, destinasi, deskripsi}) => {

    // const [wisata1, setWisata] = useState([]);
    // // const { id } = useParams();


    // useEffect(() =>{
    //     getWisata1();
    // },[]);

    // const getWisata1 = async() => {
    //     // const id = data.item.id
    //     const response = await axios.get(`http://localhost:5000/wisata/2`);
    //     setWisata(response.data);
    // }

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
        <div className="mb-20 mx-1 mt-14">
            <div className="md:space-y-4 xl:mx-1 xl:space-y-7">
                <h1 className="text-md font-medium pb-2 md:text-2xl md:text-right lg:text-3xl">{subWisata.nama}</h1>
                <div className="md:flex md:flex-row-reverse">
                    <img src={subWisata.url} alt="" className="w-full md:w-1/2 rounded-xl"/>
                    <h1 className="lg:text-xl xl:text-3xl text-center md:text-justify px-2">{subWisata.deskripsi}</h1>
                </div>
            </div>
        </div>
        </>
    );
}

export default SubWisata;