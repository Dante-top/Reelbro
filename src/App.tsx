import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import RoadMap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="main">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <div className="hero_content">
        <Banner />
      </div>
      <About />
      <RoadMap />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;
