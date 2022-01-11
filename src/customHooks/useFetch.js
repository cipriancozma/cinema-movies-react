import React, {useEffect, useState} from "react";
import {POPULAR_MOVIES, SEARCH_MOVIE} from "../APIs/API";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useFetch = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);

    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const fetchMoviesAPI = async (searchMovie, page) => {
        const result = searchMovie ? `${SEARCH_MOVIE}${searchMovie}&page=${page}` : `${POPULAR_MOVIES}&page=${page}`;
        return await (await fetch(result)).json();
    }

    const fetchMovies = async (page, searchMovie = "") => {
        try {
            setErrors(false);
            setLoading(true);
            const movies = await fetchMoviesAPI(searchMovie, page);

            setData(prevData => ({
                ...movies,
                results: page > 1 ? [...prevData.results, ...movies.results] : [...movies.results]
            }))

        } catch(err) {
            setErrors(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        setData(initialState);
        fetchMovies(1, searchMovie);
    }, [searchMovie]);


    useEffect(() => {
        if(!loadingMore) {
            return;
        }
        fetchMovies(data.page + 1, searchMovie);
        setLoadingMore(false);

    }, [loadingMore, searchMovie, data.page])

    return {
        data, loading, errors, setSearchMovie, searchMovie, setLoadingMore
    }
}