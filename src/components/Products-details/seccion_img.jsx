import React from "react";
import "./seccion_img.css";
import "./seccion_img.css";
import Seccionimgmini from "./seccion_imgmini";
import belleza from "../../assets/belleza.jpg";

class Seccionimg extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row  ">
          <div className="col-4 img-grande">
            <img src={belleza} />
          </div>
          <Seccionimgmini />
        </div>
      </div>
    );
  }
}

export default Seccionimg;
