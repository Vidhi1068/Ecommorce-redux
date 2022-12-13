import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css";

function Layout({ children }) {
  return (
    <div>
      <Header/>
      {children}
      {/* <Footer/> */}
    </div>
  );
}

export default Layout;
//we fix the children (other components between layout-->app) between Header and footer 
// so that in application layout are fixed part and in between activies are dynamic