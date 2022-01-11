import React, {useState, useEffect} from "react";
import noImg from "../../assets/no-image.png";
import {useFetch} from "../../customHooks/useFetch";
import {MovieImg} from "../MovieImg/MovieImg";
import {IMAGE_URL, SIZE, SIZE_POSTER} from "../../APIs/API";
import {Movies} from "../Movies/Movies";
import {Thumbnails} from "../Thumbnails/Thumbnails";
import {Loading} from "../Loading/Loading";
import {Search} from "../Search/Search";
import {Button} from "../Button/Button";

export function Homepage() {

    const {data, loading, errors, setSearchMovie, searchMovie, setLoadingMore} = useFetch();

    if(errors) {
        return (
            <div>
                We have an error...
            </div>
            )
    }
    return (
        <>

            {
                data.results[0]  &&
                <MovieImg
                    image={`${IMAGE_URL}${SIZE}${data.results[0].backdrop_path}`}
                    title={data.results[0].original_title}
                    text={data.results[0].overview}
                />
            }
            <Search setSearchMovie={setSearchMovie} />
            <Movies header={searchMovie ? "Results on search..." : "Recommended Movies"}>
                {data.results.map(movie => (
                    <Thumbnails key={movie.id} clickable={true} image={
                        movie.poster_path ? IMAGE_URL + SIZE_POSTER + movie.poster_path
                            : noImg
                    } movieId={movie.id} />
                ))}
            </Movies>
            {loading && <Loading />}
            {data.page < data.total_pages && !loading && (
                <Button text={"Load More..."} callback={() => setLoadingMore(true)} />
            )}
        </>
    )
}
