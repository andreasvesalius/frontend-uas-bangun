import React from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import TempatWisata from "../components/tempatWisata";
import View from "../assets/view.png";
import Comment from "../components/Comment";
import SubWisata from "../components/subWisata";
import RectangleSub from "../assets/rectanglesub.png";
import SubWisata1 from "../components/subWisata1";

const imgWisata = [
    {
      img : View,
      destinasi : "Kawasan Megamas",
      deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque quisquam molestiae minima quam aliquid ipsa accusantium cum ex totam ratione laudantium culpa obcaecati consequuntur illo nisi accusamus et placeat inventore voluptatibus, adipisci similique qui?",
   },
  //   {
  //     img : RectangleSub,
  //     destinasi : "Pohon Kasih",
  //     deskripsi : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iste?",
  //  },
  //   {
  //     img : RectangleSub,
  //     destinasi : "Pohon Kasih",
  //     deskripsi : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iste?",
  //  },
  ]

  const Wisata = [
    {
      img : RectangleSub,
      tempat : "Pohon Kasih",
      deskripsi : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iste?",
   },
  //   {
  //     img : RectangleSub,
  //     tempat : "Pohon Kasih",
  //     deskripsi : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iste?",
  //  },
  ]

  const Wisata1 = [
    {
      img : RectangleSub,
      tempat : "Pohon Kasih",
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
            <div className="">
              {Wisata.map((data) => (
                  <SubWisata img={data.img} tempat={data.tempat} deskripsi={data.deskripsi}/>
              ))}    
              {Wisata1.map((data) => (
                  <SubWisata1 img={data.img} tempat={data.tempat} deskripsi={data.deskripsi}/>
              ))} 
            </div>
            <Comment/>
            <Footer/>
        </>
    )
    
  };
  
  export default detailWisata;