import React from "react"

const Card = ({image, title, description}) => (
    <div className=" flex flex-col justify-around items-center bg-white w-[15%] h-[30vh] rounded shadow-md mt-20">
        <img src={image} className="h-[6em]"/>
        <h1>{title}</h1>
        <p className="text-center">{description}</p>
    </div>
)

export default Card 