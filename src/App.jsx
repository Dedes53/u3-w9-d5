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
          <MovieCarousel title="Movies from API" searchQuery="Star Wars" />
        </div>

        <MyFooter />
      </div>
    </>
  )
}

export default App
