import React from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import TempatWisata from "../components/tempatWisata";
import View from "../assets/view.png";
import Comment from "../components/Comment";
import subWisata from "../components/subWisata";
import RectangleSub from "../assets/rectanglesub.png";

const imgWisata = [
    {
      img : View,
      destinasi : "Kawasan Megamas",
      deskripsi : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iste?",
   },
    {
      img : RectangleSub,
      destinasi : "Pohon Kasih",
      deskripsi : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iste?",
   },
    {
      img : RectangleSub,
      destinasi : "Pohon Kasih",
      deskripsi : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iste?",
   },
  ]

const detailWisata = () => {
    return (
        <>
            <NavBar/>
            {imgWisata.map((data) => (
                <TempatWisata img={data.img} destinasi={data.destinasi} deskripsi={data.deskripsi}/>
            ))}

            {/* {imgWisata.map((data) => (
                <subWisata img={data.img} subTempat={data.subTempat} deskripsi={data.deskripsi}/>
            ))}     */}
            <Comment/>
            <Footer/>
        </>
    )
    
  };
  
  export default detailWisata;