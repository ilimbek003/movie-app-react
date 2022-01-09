import React, {useEffect, useState} from 'react';
import axios from "axios";
import APIKEY from "../APIKEY";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import Slider from "react-slick";

const Thriller = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}&language=en-US`)
            .then(res => setMovies(res.data.results))
    }, [])
    console.log(movies)

    const [effect, setEffect] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}&language=en-US&page=10`)
            .then(res => setEffect(res.data.results))
    }, [])
    console.log(effect)


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        speed: 400
    };

    return (
        <div className="container">
            <div className="my-5">
                <Slider {...settings}>
                    {
                        movies.map(el => (
                            <div className="col-4" key={el.id}>
                                <Card style={{width: '12rem'}}>
                                    <div className="hover07 column ">
                                        <div>
                                            <figure>
                                                <Link to={`/movie/${el.id}`}>
                                                    <Card.Img variant="top"
                                                              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}/>
                                                </Link>
                                            </figure>
                                        </div>
                                    </div>
                                    <h5 className="title">{el.original_title}</h5>
                                    <h5 className="title">{el.release_date}</h5>
                                    {/*<Spinner animation="border" />*/}
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
                c1
            </div>
            <div className="row my-5">
                {
                    effect.slice(0, 3).map(el => (
                        <div className="col-4" key={el.id}>
                            <Card style={{width: '25rem'}}>
                                <div className="hover07 column">
                                    <div>
                                        <figure>
                                            <Link to={`/movie/${el.id}`}>
                                                <Card.Img variant="top"
                                                          src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}/>
                                            </Link>
                                        </figure>
                                        <span>
                                            <h5 className="title">{el.title}</h5>
                                            <h5 className="title">{el.release_date}</h5>
                                        </span>
                                    </div>
                                </div>


                                {/*<Spinner animation="border" />*/}
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Thriller;