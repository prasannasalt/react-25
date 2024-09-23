import "./App.css";
import Accordian from "./components/accordian/index";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color/index";
import StartRating from "./components/start-rating/index";
import LoadMoreData from "./components/load-more-data/index";
import QRCodeGenerator from "./components/qr-code-generator/index";
import LightDarkMode from "./components/light-dark-mode/index";
import ScrollIndicator from "./components/scroll-indicator/index";
import menus from "./components/tree-view/data";
import TabTest from "./components/custom-tabs/tabs-test";
import ModalTest from "./components/custom-model-popup/model-test"
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
            <li>
              <Link to="/qr-code"> QR Code Gen</Link>
            </li>
            <li>
              <Link to="/ligh-dark"> Light Dark</Link>
            </li>
            <li>
              <Link to="/scroll-indicator"> Scroll Indicator</Link>
            </li>
            <li>
              <Link to="/custom-tabs"> Custom Tabs </Link>
            </li>
            <li>
              <Link to="/popup"> Pop Up </Link>
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

          {/*   QRCodeGenerator */}
          <Route path="/qr-code" element={<QRCodeGenerator />} />

          {/* Light And Dark Mode */}
          <Route path="/ligh-dark" element={<LightDarkMode />} />

          {/* Scroll Indicator */}
          <Route
            path="/scroll-indicator"
            element={
              <ScrollIndicator
                url={"https://dummyjson.com/products?limit=100"}
              />
            }
          />
          {/* Custom Tabs */}
          <Route path="/custom-tabs" element={<TabTest />} />

          {/* Model Pop Up */}
          <Route path="/popup" element={<ModalTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
