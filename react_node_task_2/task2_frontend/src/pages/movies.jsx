import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Movie } from "../components/movie";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [err, setErr] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method : 'get',
                    header : {"content-type" : "multipart/form-data"},
                    url : "http://localhost:5000/movies/fetch"
                });
                const data = await response?.data;
                console.log(data);
                setMovies(data.movies);
            } catch (error) {
                console.log(error);
                setErr(true);
            }
        }

        fetchData()
    },[])

    return (
        <div className="page">
            <h1 className="pageHead">
                Latest Movies
            </h1>
            <div className="container">
                {
                    movies.map((movie, index) => {
                        return (
                            <Movie
                                key={index}
                                movieName={movie.movieName}
                                rating={movie.movieRating}
                                releaseDate={movie.movieReleaseDate}
                            />
                        )
                    })
                }
            </div>
            <div className="linkDiv">
                <Link className="link" to="/">Click here for Home</Link>
            </div>
            {err && <p>Something went worng</p>}
        </div>
    )
}

export default Movies;