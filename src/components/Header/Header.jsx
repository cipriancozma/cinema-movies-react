import React from "react";
import "./Header.scss";
import CCLogo from '../../assets/Logo.PNG';
import Cinema from "../../assets/cinema.PNG";
import {Link} from "react-router-dom";

export function Header() {

    return (
        <div className={"wrapper"}>
            <div className={"content"}>
                <Link to={"/"}>
                    <img src={Cinema} alt={"logo2"} width={"100px"} />
                </Link>
                <img src={CCLogo} alt={"logo"} width={"200px"}/>

            </div>
        </div>
    )
}