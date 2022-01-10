import React from "react";
import "./Movies.scss";

export function Movies({header, children}) {

    return (
        <div className={"wrapper-movie"}>
                <h1>{header}</h1>
                <div className={"wrapper-content-movie"}>{children}</div>
        </div>
    )
}