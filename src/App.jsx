import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./screens/inicio";
import Login from "./screens/login";
import Series from "./screens/Series";
import Movies from "./screens/Movies";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
