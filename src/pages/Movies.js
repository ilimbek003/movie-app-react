import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import APIKEY from "../APIKEY";
import {Card} from "react-bootstrap";


const Movies = () => {

    const {id} = useParams()
    const [use, setUse] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
            .then(res => setUse(res.data))
    }, [use.id])
    console.log(use)

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5 hatch">
                    <Link to={`/movies/${use.id}`}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${use.backdrop_path}`} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Movies;