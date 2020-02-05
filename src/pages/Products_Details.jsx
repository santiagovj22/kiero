import React from "react";
import Footer from "../components/footer";
import RutasImg from "../components/RutasImg";
import Products_image from "../components/Products-details/Products_image";
import InfoProduct from "../components/Products-details/InfoProduct";
import Detalles from "../components/Products-details/Detalles";
import Nav from "../components/Nav/Nav";
import NavCategory from "../components/Nav/NavCategory";
import Slider2 from "../components/Products-details/Slider2";
import Slider3 from "../components/Products-details/Slider3";
import Explora from "../components/Products-details/Explora";


const Layout = props => {
  return (
    <React.Fragment>
      {props.children}
      <Nav />
      <NavCategory />
      <RutasImg />
     <Products_image />
   
      <Detalles />
      <Explora />
      <Slider2 />
      <Slider3 />
      <Footer />
      <InfoProduct />
    </React.Fragment>
  );
};

export default Layout;
