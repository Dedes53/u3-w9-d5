import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import GenresBar from "./components/GenresBar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <div>
        <MyNav />

        <div className="container-fluid px-4">
          <GenresBar />
          <Carousel title="Trending Now" />
          <Carousel title="Watch It Again" />
          <Carousel title="New Releases" />

        </div>

        <MyFooter />
      </div>
    </>
  )
}

export default App
