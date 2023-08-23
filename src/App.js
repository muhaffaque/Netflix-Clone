import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Netflix from "./pages/Netflix";
import TvShow from "./pages/TvShow";
import MoviePage from "./pages/MoviePage";
import Player from "./pages/Player";
// import Header from "./components/Header";
// import BackgroundImage from "./components/BackgroundImage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/signup" element={<SignUpPage/>} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/tv" element={<TvShow />} />
        <Route exact path="/movie" element={<MoviePage />} />
        <Route exact path="/player" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
