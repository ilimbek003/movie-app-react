import React, {useState} from 'react';
import {useEffect} from "react";
import axios from "axios";
import APIKEY from "../APIKEY";
import Slider from "react-slick";
import {Link, useParams} from "react-router-dom";
import {Card} from "react-bootstrap";


const MovieDetails = () => {

    const {id} = useParams()
    const [movie, setMovie] = useState([])
    const [log, setLog] = useState([])
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
            .then(res => setMovie(res.data))
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=ru-RU`)
            .then(res => {setLog(res.data.cast)
            })

    }, [movie.id])

    console.log(movie)
    console.log(log)

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        speed: 400
    };

    return (
        <div>

            <div    style={{
                background: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path}) no-repeat center/cover`

            }}>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-6 mt-5 hatch">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="h-75"/>
                        </div>
                        <div className="col-6 mt-5 bag">
                            <h1 className="hornet">{movie?.title || movie.original_title || movie?.name || movie?.original_name}</h1>
                            <p className="viber"> ДАТА ВЫПУСКА:{movie.release_date}</p>
                            <p className="viber">СЧЁТ ГОЛОСОФ:{movie.vote_count}</p>
                            <p className="pro">ОПИСАНИЕ:{movie.overview}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <Slider {...settings}>
                    {
                        log.map(el => (
                            <Card style={{width: '5rem'}} className="img">
                                <Link to={`/movie/${el.id}`}>
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`} />
                                </Link>
                                <h1 className="title">{el.name}</h1>
                                <p className="title">{el.popularity}</p>
                                <h1 className="title">{el.character}</h1>
                            </Card>
                        ))
                    }
                </Slider>
            </div>
        </div>


    )
}

export default MovieDetails;