import React, {useState, useEffect} from "react";
import Profile from "../assets/profile-icon.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Comment = () => {

    const [comment, setComment] = useState([]);

    useEffect(() =>{
        getComment();
    },[]);

    const getComment = async() => {
        const response = await axios.get("http://localhost:5000/comment");
        setComment(response.data);
    }

    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    
    const saveComment = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("Comment", title);
        try {
            await axios.post("http://localhost:5000/comment", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/detailWisata");
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <div className="bg-[#D9D9D9] flex justify-between mx-1 rounded-md mb-2 px-2 lg:text-2xl xl:text-3xl xl:py-3">
            <form onSubmit={saveComment}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tuliskan komen anda...." />
                <button type="submit">Post </button>
            </form>

            {/* <h1 className="font-semibold">Post</h1> */}
        </div>
        <div className="bg-[#D9D9D9] mb-2 rounded-md mx-1 px-2 lg:text-2xl xl:text-3xl xl:py-4 xl:px-4 text-justify pb-2">
            <div className="flex items-center space-x-2">
                <img src={Profile} alt="" />
                <p>John Doe</p>
            </div>
            <div className="pl-14">
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident consequuntur quae, sunt harum voluptas quod repellendus deserunt quo error aliquid, eos      
                    facilis id? Libero incidunt fugiat id, quos ipsum nihil numquam omnis nobis deleniti nisi illum molestiae assumenda. Repudiandae molestias nulla adipisci, eligendi 
                    tempore quasi animi ducimus accusantium esse?</p> */}
                {comment.map((comment) => (
                    <p key={comment.id}>{comment.Comment}</p>
                ))}
            </div> 
        </div>
    </>
    )
};

export default Comment;