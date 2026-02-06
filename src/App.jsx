import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import GenresBar from "./components/GenresBar";
import Carousel from "./components/Carousel";
import MovieCarousel from "./components/MovieCarousel";
function App() {
  return (
    <>
      <div>
        <MyNav />

        <div className="container-fluid px-4">
          <GenresBar />
          {/* <Carousel title="Trending Now" />
          <Carousel title="Watch It Again" />
          <Carousel title="New Releases" /> */}
          <div className="container-fluid"> <MovieCarousel title="Fantascienza" searchQuery="Star Wars" /></div>
          <div className="container-fluid"> <MovieCarousel title="Horror" searchQuery="Horror" /></div>
          <div className="container-fluid"> <MovieCarousel title="Commedie" searchQuery="Comedy" /></div>
        </div>

        <MyFooter />
      </div>
    </>
  )
}

export default App
