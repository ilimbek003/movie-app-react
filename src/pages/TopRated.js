import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import Slider from "react-slick";


const TopRated = () => {

    const [top, setTop] = useState([])


    const [page, setPage] = useState(1)
    const handlePage = (pageNum) => {
        setPage(pageNum)
    }


    const [items, setItems] = useState(3)
    const Page = (Num) => {
        setItems(Num)
    }


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=f42c53f4f985e0480ab807c5d464b681&language=en-US&page=${page}`)
            .then(res => setTop(res.data.results))
    }, [page])
    console.log(top)


    const [bag, setBag] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=f42c53f4f985e0480ab807c5d464b681&language=en-US&page=10`)
            .then(res => setBag(res.data.results))
    }, [])
    console.log(bag)


    const [thriller, setThriller] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=f42c53f4f985e0480ab807c5d464b681&language=en-US&page=10`)
            .then(res => setThriller(res.data.results))
    }, [])
    console.log(thriller)

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        speed: 400
    };
    return (
        <div className="container my-5">
            <div className="row my-5">
                <Slider {...settings}>
                    {
                        top.map(el => (
                            <div className="col-4" key={el.id}>
                                <Card style={{width: '12rem'}}>
                                    <div className="hover07 column">
                                        <div>
                                            <figure>
                                                <Link to={`/movie/${el.id}`}>
                                                    <Card.Img variant="top"
                                                              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}/>
                                                </Link>
                                            </figure>
                                        </div>
                                    </div>
                                    <h5 className="title">{el.title}</h5>
                                    <h5 className="title">{el.release_date}</h5>
                                    {/*<Spinner animation="border" />*/}
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
                <div className="movie btn my-5">
                    {
                        [...Array(2).keys()].map(el => (
                            <button onClick={() => handlePage(el + 1)}
                                    className=
                                        {`btn btn-primary mx-1 ${page === el + 1 && "btn btn-success"}`}>
                                {el + 1}</button>
                        ))
                    }
                </div>
                <div className="row">
                    {
                        bag.slice(0, 3).map(el => (
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
                <div id="vents">
                    <Slider {...settings}>
                        {
                            thriller.map(el => (
                                <div className="big">
                                    <div className="col-4" key={el.id}>
                                        <Card style={{width: '12rem'}}>
                                            <div className="hover07 column">
                                                <div>
                                                    <figure>
                                                        <Link to={`/movie/${el.id}`}>
                                                            <Card.Img variant="top"
                                                                      src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}/>
                                                        </Link>
                                                    </figure>

                                                </div>
                                            </div>

                                            <h5 className="title">{el.title}</h5>
                                            <h5 className="title">{el.release_date}</h5>
                                            {/*<p className="title">{el.overview}</p>*/}
                                            {/*<Spinner animation="border" />*/}
                                        </Card>
                                    </div>
                                </div>


                            ))
                        }
                    </Slider>
                </div>
                <div className="movie btn my-5">

                    {
                        [...Array(5).keys()].map(el => (
                            <button onClick={() => Page(el + 1)}
                                    className=
                                        {`btn btn-primary mx-1 ${items === el + 1 && "btn btn-success"}`}>
                                {el + 1}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;