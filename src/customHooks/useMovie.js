import React, {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../APIs/API";

export const useMovie = movieId => {

    const [data, setData] = useState({});
    const [actors, setActors] = useState({});
    const [loading, setLoading] =useState(true);
    const [errors, setErros] = useState(false);

    useEffect(() => {

        const fetchData= async() => {
            try {
                setLoading(true);
                setErros(false);
                (await fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}`)).json().then(
                    data => {
                        setData({
                            ...data,
                            data
                        });
                    }
                ).catch(err => setErros(err));

                (await fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)).json().then(actors => {
                    setActors({
                        ...actors,
                        actors: actors.cast
                    })
                }).catch(err => {
                    setErros(err)
                });

                setLoading(false);
            } catch (err) {
                setErros(true);
            }
        }

        fetchData();

    },[movieId])

    return { data, loading, errors, actors}
}