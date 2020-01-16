import React, { Fragment } from "react";

class RutasImg extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Products</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">plancha</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RutasImg;
