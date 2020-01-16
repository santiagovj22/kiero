import React from "react";
import Footer from "../components/footer";
import RutasImg from "../components/RutasImg";
import ProductsImage from "../components/Products-details/Products_image";
import InfoProduct from "../components/Products-details/InfoProduct";
import Detalles from "../components/Products-details/Detalles";
import Nav from "../components/Nav/Nav";
import NavCategory from "../components/Nav/NavCategory";
import Seccionimg from "../components/Products-details/seccion_img";
import Slider2 from "../components/Products-details/Slider2";
import Slider3 from "../components/Products-details/Slider3";
import Slider1 from "../components/Products-details/Slider1";
import Imagenes from "../components/Products-details/imagenes";
import Buydetails from "../components/Products-details/BuyDetails/BuyDetails";

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

      <Buydetails />

      <Footer />
      <InfoProduct />
    </React.Fragment>
  );
};

export default Layout;
