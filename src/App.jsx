import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import TvShows from "./components/TvShows";
function App() {
  return (
    <>
      <BrowserRouter>

        <MyNav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tv-shows" element={<TvShows />} />


          <Route path="*" element={<NotFound />} />
        </Routes>

        <MyFooter />

      </BrowserRouter>
    </>
  )
}

export default App
