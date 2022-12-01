import React from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import TempatWisata from "../components/tempatWisata";
import View from "../assets/view.png";
import Comment from "../components/Comment";

const imgWisata = [
    {
      img : View,
      destinasi : "Kawasan Megamas",
      deskripsi : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iste?",
   },
    {
      img : View,
      destinasi : "God Bless Park",
      deskripsi : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iste?",
   },
    {
      img : View,
      destinasi : "Boulevard Tuminting",
      deskripsi : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iste?",
   },
    {
      img : View,
      destinasi : "Malalayang Beach Walk",
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
            <Comment/>
            <Footer/>
        </>
    )
    
  };
  
  export default detailWisata;