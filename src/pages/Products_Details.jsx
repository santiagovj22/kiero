import React from "react";
import Footer from "../components/footer";
import RutasImg from "../components/RutasImg";
import ProductsImage from "../components/Products-details/Products_image";
import InfoProduct from "../components/Products-details/InfoProduct";
import Detalles from "../components/Products-details/Detalles";
import Nav from "../components/Nav/Nav";
import NavCategory from "../components/Nav/NavCategory";
import Slider2 from "../components/Products-details/Slider2";
import Slider3 from "../components/Products-details/Slider3";
import Imagenes from "../components/Products-details/imagenes";

const Layout = props => {
  return (
    <React.Fragment>
      {props.children}
      <Nav />
      <NavCategory />
      <RutasImg />
      <ProductsImage />
      <Detalles />
      <Imagenes />
      <Slider2 />
      <Slider3 />
      <Footer />
      <InfoProduct />
    </React.Fragment>
  );
};

export default Layout;
