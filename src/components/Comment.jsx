import React from "react";
import Profile from "../assets/profile-icon.png";

const Comment = () => {
    return(
        <>
        <div className="bg-[#D9D9D9] flex justify-between mx-1 rounded-md mb-2 px-2 lg:text-2xl xl:text-3xl xl:py-3">
            <h1 className="font-semibold">Write a comment.....</h1>
            <h1 className="font-semibold">Post</h1>
        </div>
        <div className="bg-[#D9D9D9] mb-2 rounded-md mx-1 px-2 lg:text-2xl xl:text-3xl xl:py-4 xl:px-4 text-justify pb-2">
            <div className="flex items-center space-x-2">
                <img src={Profile} alt="" />
                <p>John Doe</p>
            </div>
            <div className="pl-14">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident consequuntur quae, sunt harum voluptas quod repellendus deserunt quo error aliquid, eos facilis id? Libero incidunt fugiat id, quos ipsum nihil numquam omnis nobis deleniti nisi illum molestiae assumenda. Repudiandae molestias nulla adipisci, eligendi tempore quasi animi ducimus accusantium esse?</p>
            </div>
        </div>
    </>
    )
};

export default Comment;