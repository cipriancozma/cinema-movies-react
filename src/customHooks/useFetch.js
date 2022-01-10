import React, {useEffect, useState} from "react";
import {POPULAR_MOVIES, SEARCH_MOVIE} from "../APIs/API";

const initialState = {
    pagination: 0,
    results: [],
    total_pagination: 0,
    total_results: 0
}

export const useFetch = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);

    console.log("data", data)
    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const fetchMovies = async (pagination, searchMovie = "") => {
        try {
            setErrors(false);
            setLoading(true);
            const movie = searchMovie ? `${SEARCH_MOVIE}${searchMovie}&page=${pagination}` : `${POPULAR_MOVIES}&page=${pagination}`;
            (await fetch(movie)).json().then(data => setData(prevData => ({
                ...prevData,
                results: pagination > 1 ? [...prevData.results, ...data.results] : [...data.results]
            }))).catch(err => setErrors(err));

        } catch(err) {
            setErrors(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies(1)
    }, [])

    useEffect(() => {
        setData(initialState);
        fetchMovies(1, searchMovie);
    }, [searchMovie]);

    useEffect(() => {
        if(!loadingMore) {
            return;
        }
        fetchMovies(data.pagination + 1, searchMovie);
        setLoadingMore(false);

    }, [loadingMore, searchMovie, data.pagination])

    return {
        data, loading, errors, setSearchMovie, searchMovie, setLoadingMore
    }
}