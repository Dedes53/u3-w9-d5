import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import GenresBar from "./components/GenresBar";

function App() {
  return (
    <>
      <div>
        <MyNav />

        <div className="container-fluid px-4">
          <GenresBar />

        </div>

        <MyFooter />
      </div>
    </>
  )
}

export default App
