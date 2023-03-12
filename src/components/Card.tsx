import React from "react";
import { Link } from "react-router-dom";

export default function Card({caption = "", img = "", link = "", id = ""}){
    return(
        <Link to={link} className="card">
            <img src={img} className="inner-card" id={id} alt={caption} />
            <div className="caption">{caption}</div>
        </Link>
    )
}
