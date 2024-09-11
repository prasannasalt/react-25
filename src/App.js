import "./App.css";
import Accordian from "./components/accordian/index";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color/index";
import StartRating from "./components/start-rating/index";
import LoadMoreData from "./components/load-more-data/index";
import menus from "./components/tree-view/data";
import Intro from "./components/intro";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TreeView from "./components/tree-view";

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
            <li>
              <Link to="/load-more-data">LoadMoreData</Link>
            </li>
            <li>
              <Link to="/tree-view"> Tree View</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Intro Component */}
          <Route path="/" element={<Intro />} />

          {/* Accordian Component */}
          <Route path="/accordion" element={<Accordian />} />

          {/* RandomColor Component */}
          <Route path="/random-color" element={<RandomColor />} />

          {/* StartRating Component */}
          <Route path="/star-rating" element={<StartRating noOfStars={10} />} />

          {/* ImageSlider Component */}
          <Route
            path="/image-slider"
            element={
              <ImageSlider
                url={"https://picsum.photos/v2/list"}
                page={"1"}
                limit={"10"}
              />
            }
          />

          {/* LoadMoreData Component */}
          <Route path="/load-more-data" element={<LoadMoreData />} />

          {/* TreeView Component */}
          <Route path="/tree-view" element={<TreeView menus={menus} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
