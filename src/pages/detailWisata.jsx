import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import TempatWisata from "../components/TempatWisata";
import SubWisata1 from "../components/SubWisata1";
import SubWisata from "../components/SubWisata";
import Comment from "../components/Comment";


const DetailWisata = () => {
  
    const { id } = useParams();
    const [wisata, setWisata] = useState("");

    const getWisata = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/wisata/${id}`);
        setWisata(response.data);
        console.log(wisata)
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getWisata();
    }, []);

    const { wisataid } = useParams();
    const [subWisata, setSubWisata] = useState("");

    const getSubWisata = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/subwisata/${wisataId}`);
        setSubWisata(response.data);
        console.log(wisata)
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getSubWisata();
    }, []);

    return (
      <>
        <NavBar/>
        <TempatWisata 
          img={wisata.url}
          id={wisata.id}
          destinasi={wisata.nama}
          deskripsi={wisata.deskripsi}
        />
        <SubWisata
          wisataId={subWisata.wisataId}
          img={wisata.url}
          destinasi={wisata.nama}
          id={wisata.id}
        />
        <Footer/>
      </>
        
    );
};
  
export default DetailWisata;