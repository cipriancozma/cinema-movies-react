import React, {useEffect, useRef, useState} from "react";
import "./Search.scss";

export function Search({setSearchMovie}) {

    const [state, setState] = useState("");

    const init = useRef(true);

    useEffect(() => {
        if(init.current) {
            init.current = false;
            return;
        }
        const timerId = setTimeout(() => {
            setSearchMovie(state);
        }, 800)

        return () => {
            clearTimeout(timerId);
        }
    }, [setSearchMovie, state])

    return (
        <div className={"wrapper-search"}>
            <div className={"wrapper-content"}>
                <input type={"text"} placeholder={"Search movies..."} value={state}
                       onChange={(e) => setState(e.target.value)}/>
            </div>
        </div>
    )
}