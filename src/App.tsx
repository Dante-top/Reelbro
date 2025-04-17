import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { WalletContextProvider } from "./web3/WalletProvider";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import RoadMap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <WalletContextProvider>
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
    </WalletContextProvider>
  );
}

export default App;
