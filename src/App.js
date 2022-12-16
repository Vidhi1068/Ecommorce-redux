import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeProduct from "./components/HomeProduct";
import Jewellary from "./components/Jewellary";
import Cloths from "./components/Cloths";
import Electronics from "./components/Electronics";
import Customerservices from "./components/Customerservices";
import Header from "./Layouts/Header";
import CartSection from "./components/CartSection";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/Home" element={<HomeProduct />} />
            <Route path="/Jewellary" element={<Jewellary />} />
            <Route path="/Cloths" element={<Cloths />} />
            <Route path="/Electronics" element={<Electronics />} />
            <Route path="/Services" element={<Customerservices />} />
            <Route path="/Cartitem" element={<CartSection />} />
          </Routes>
        </Provider>
      </div>
    </>
  );
}

export default App;
