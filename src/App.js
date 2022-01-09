import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import PopularMovies from "./pages/PopularMovies";
import MovieDetails from "./pages/MovieDetails";
import TopRated from "./pages/TopRated";
import Thriller from "./pages/Thriller";
import Movies from "./pages/Movies";

function App() {

    return (
        <div className="App">
            <Router>
                <Header/>

                <Routes>
                    <Route path="/" element={<PopularMovies/>}/>
                    <Route path="/thriller" element={<Thriller/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/topRated" element={<TopRated/>}/>
                    <Route path="/movie/:id" element={<MovieDetails/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;