import React from "react";
// import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DestiNasi from "../components/DestiNasi";
import Sitou from "../components/Sitou";
import TopPic from "../components/TopPic";
import View from "../assets/view.png"
// import { useParams } from "react-router-dom";

const imgHome = [
    {
      img : View,
      destinasi : "Kawasan Megamas",
   },
    {
      img : View,
      destinasi : "Malalayang Beach Walk",
   },
    {
      img : View,
      destinasi : "Boulevard Tuminting",
   },
    {
      img : View,
      destinasi : "Rumah Alam Manado",
   },
  ]

const Beranda = () => {
    return (
        <>
            <div className='w-full h-full '>
            <NavBar/>
            <TopPic/>
            <div className="rounded-xl m-1 py-1 pl-2 font-semibold text-[17px] md:text-[23px] lg:text-[32px] xl:text-[42px] text-center md:py-5 bg-[#FFF7E9]">
                <h1>Destinasi Wisata di Kota Manado</h1>
            </div>
            <div className="md:grid md:grid-cols-2">
                {imgHome.map((data) => (
                <DestiNasi img={data.img} destinasi={data.destinasi}/>
                ))}
            </div>
            <Sitou/>
            <Footer/>
            </div>
        </>
    )
    
  };
  
  export default Beranda;