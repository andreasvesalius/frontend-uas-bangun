import React, {useState, useEffect} from "react";
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
        <div className="bg-[#FFF7E9] mx-auto justify-between rounded-md mb-2 px-2 lg:text-2xl xl:text-3xl xl:py-3">
            <form onSubmit={saveComment} className="">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tuliskan komen anda...." className="my-3 md:mr-[450px] lg:mr-[700px] xl:mr-[1100px] 2xl:mr-[2200px] mr-22 text-[20px] font-semibold rounded-md"/>
                <button type="submit" className="bg-green-700 text-white rounded-md p-1 font-semibold">Post </button>
            </form>
        </div>
        <div className="bg-[#FFF7E9] mb-2 rounded-md mx-1 px-2 lg:text-2xl xl:text-3xl xl:py- 4 xl:px-4 text-justify pb-2">
            <div className="">
                <h1 className="font-bold pb-5 text-center text-[25px]">Comment Pengunjung</h1>
                {comment.map((comment) => (
                    <ul>
                        <li key={comment.id} className="pb-2 text-slate-600 font-medium">{comment.Comment}</li>
                    </ul>
                ))}
            </div> 
        </div>
    </>
    )
};

export default Comment;