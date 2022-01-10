import React from "react";
import "./Thumbnails.scss";
import {Link} from "react-router-dom";

export function Thumbnails({image, clickable, movieId}) {


    return (
        <>
            {
                clickable ? (
                    <Link to={`/${movieId}`}>
                        <img src={image} alt={"movie"}  className={"thumbnail-img"}/>
                    </Link>
                ) : (
                    <img src={image} alt={"movie"}  className={"thumbnail-img"}/>
                )}
        </>
    )
}
