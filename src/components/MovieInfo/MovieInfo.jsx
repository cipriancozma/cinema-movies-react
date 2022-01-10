import React from "react";
import "./MovieInfo.scss";
import {Thumbnails} from "../Thumbnails/Thumbnails";
import {IMAGE_URL, SIZE_POSTER} from "../../APIs/API";
import noImg from "../../assets/no-image.png";


export function MovieInfo({ movie }) {

    return (
        <div className={"wrapper-movie-info"}>
            <div className={"wrapper-movie-content"}>
                <Thumbnails image={
                    movie.poster_path ? `${IMAGE_URL}${SIZE_POSTER}${movie.poster_path}`
                        : noImg
                } clickable={false} alt={"movie"} />
            </div>
                <div className={"info"}>
                    <div>
                        <h1>{movie.title}</h1>
                        <h3>INFO ABOUT MOVIE</h3>
                        <p>{movie.overview}</p>
                    </div>
                    <div className={"rating-directors"}>
                        <div>
                            <h3>RATING</h3>
                            <div className={"score"}>{movie.vote_average}</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}