import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Team from "./components/Team";
import Donate from "./components/Donate";
import GamePlan from "./components/GamePlan";
import TokenUtility from "./components/TokenUtility";
import HowToBuy from "./components/HowtoBuy";

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
      <Banner />
      <Team />
      <Donate />
      <GamePlan />
      <TokenUtility />
      <HowToBuy />
    </div>
  );
}

export default App;
