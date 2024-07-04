import React from "react";

const Card = ({ image, title, cuisine, hours })=>{
    return(
        <div className="card w-full h-full border-orange-600 border-solid border-2 border-opacity-70 flex flex-col justify-start items-center ">
            <div className="image w-full h-3/5 ">
                <img src={image} alt={title}  className = "w-full h-full"/>
            </div>

      <div className="infobox w-full">
        <div className="title text-xl font-bold mb-2 text-center">{title}</div>
        <div className="flex text-sm justify-center gap-7 text-orange-600">
          <div className="">{cuisine}</div>
          <span>|</span>
          <div className="">{hours}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

