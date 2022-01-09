import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Form, FormControl, Button} from 'react-bootstrap'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)


    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    return (
        <div className="container">
            <div className={scrolled ? "header scrolled" : "navbar"}>
                <nav>
                    <Link to="">TV cinema</Link>
                </nav>
                <nav className="flags">
                    <div className="street">
                        <input type="checkbox" id="hd-1" className="reference"/>
                        <label htmlFor="hd-1">Жанр</label>
                        <Link to="/thriller" className="story">
                            <span className="story">Боевик</span>
                        </Link>
                        <Link to="/movies" className="story">
                            <span className="story">Комедия</span>
                        </Link>

                        <Link to="/thriller" className="story">
                            <span className="story">Приключение</span>
                        </Link>

                        <Link to="/thriller" className="story">
                            <span className="story">Фантастика</span>
                        </Link>

                        <Link to="/thriller" className="story">
                            <span className="story">Драма</span>
                        </Link>
                        <Link to="/thriller" className="story">
                            <span className="story">Ужасы</span>
                        </Link>
                    </div>
                    <Link to="/topRated">Top Rated</Link>
                    <Link to="/upcoming">Upcoming</Link>
                    <Link to="/nowPlaying">Now Playing</Link>
                    <Link to="/latest">Latest</Link>

                </nav>

                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>


            </div>
        </div>
    );
};

export default Header;