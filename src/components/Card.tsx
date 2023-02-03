import React from "react";

export default function Card({caption = "", img = "", link = "", id = ""}){
    return(
        <a href={link} className="card">
            <img src={img} className="inner-card" id={id} alt={caption} />
            <div className="caption">{caption}</div>
        </a>
    )
}