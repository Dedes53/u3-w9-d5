import GenresBar from "./GenresBar";
import MovieCarousel from "./MovieCarousel";

const Main = function () {
    return (
        <div className="container-fluid px-4">
            <GenresBar />
            <div className="container-fluid"> <MovieCarousel title="Fantascienza" searchQuery="Star Wars" /></div>
            <div className="container-fluid"> <MovieCarousel title="Horror" searchQuery="Horror" /></div>
            <div className="container-fluid"> <MovieCarousel title="Commedie" searchQuery="Comedy" /></div>
        </div>
    )
}

export default Main;