import React from "react";
import {IMAGE_URL, SIZE_POSTER} from "../APIs/API";
import noImg from "../assets/no-image.png";
import {useMovie} from "../customHooks/useMovie";
import {useParams} from "react-router-dom";
import {MovieInfo} from "./MovieInfo/MovieInfo";
import {Loading} from "./Loading/Loading";

export function Movie() {
    const {movie} = useParams();
    const { data, loading, errors, actors} = useMovie(movie);

    // console.log(data)
    // console.log(actors)
    if(loading) return <Loading />;
    if(errors) return <div>We have an error...</div>

    return (
        <>
            <div>
                <MovieInfo movie={data} />
            </div>
        </>

    )
}