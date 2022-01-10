import React from "react";
import "./Button.scss";

export function Button({text, callback}) {

    return (
        <button type={"button"} onClick={callback} className={"button-load"}>
            {text}
        </button>
    )
}