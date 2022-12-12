import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { Routes,Route } from "react-router-dom";
import MixProduct from "./components/MixProduct"
import Jewellary from "./components/Jewellary";
import Mobile from "./components/Mobile"
import Customerservices from "./components/Customerservices"

function App() {
  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route path="/Home" element={<MixProduct />} />
          <Route path="/Jewellary" element={<Jewellary />} />
          <Route path="/Mobile" element={<Mobile />} />
          <Route path="/Services" element={<Customerservices />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
