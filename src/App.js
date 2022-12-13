import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeProduct from "./components/HomeProduct";
import Jewellary from "./components/Jewellary";
import Mobile from "./components/Mobile";
import Customerservices from "./components/Customerservices";
import Header from "./Layouts/Header";


function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
         
            {/* <Route path="/" element={<Layout />} /> */}
            <Route path="/Home" element={<HomeProduct />} />
            <Route path="/Jewellary" element={<Jewellary />} />
            <Route path="/Mobile" element={<Mobile />} />
            <Route path="/Services" element={<Customerservices />} />
        
        </Routes>
      </div>
    </>
  );
}

export default App;
