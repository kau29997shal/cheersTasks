import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { Home } from './pages/home';
import Movies from "./pages/movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route index element={<Home/>} />
        <Route exact path="/movies" element={<Movies/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
