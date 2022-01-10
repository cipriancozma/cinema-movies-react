import React from "react";
import "./MovieImg.scss";

export function MovieImg({title, text, image}) {


    return (
        <div className={"wrapper-img"} style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <div className={"content-img"}>
                <h1 className={"text"}>{title}</h1>
                <p className={"text"}>{text}</p>
            </div>
        </div>
    )
}