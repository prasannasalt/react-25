import "./App.css";
import Accordian from "./components/accordian/index";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color/index";
import StartRating from "./components/start-rating/index";
import Intro from "./components/intro";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/accordion">Accordion</Link>
            </li>
            <li>
              <Link to="/random-color">Random Color</Link>
            </li>
            <li>
              <Link to="/star-rating">Star Rating</Link>
            </li>
            <li>
              <Link to="/image-slider">Image Slider</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
        <Route path="/" element={<Intro/>} />
          <Route path="/accordion" element={<Accordian />} />
          <Route path="/random-color" element={<RandomColor />} />
          <Route path="/star-rating" element={<StartRating noOfStars={10} />} />
          <Route
            path="/image-slider"
            element={
              <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
