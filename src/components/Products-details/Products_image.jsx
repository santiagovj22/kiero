import React, { Fragment } from "react";
import ProductsInfo from "./Products_info";
import axios from "axios";
import "../../assets/css/products_image.css";
import ThumbnailGallery from "./thumbnail-gallery/thumbnailGallery";

class productsImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }

  async componentWillMount() {
    let { data } = await axios.get(`http://localhost:5000/products/5`);
    if (data.error) console.error(data.message);
    this.setState({
      posts: data.data
    });
  }

  render() {
    {
      console.log(this.state.posts.files);
    }
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-7 izquierda ">
              <div className="col-10 text im ">
                <div className="imgprincipal">
                  <img
                    src={
                      this.state.posts.files && this.state.posts.files[0].url
                    }
                  />
                </div>
              </div>
              <div className="col-2 img mt-3">
                <ThumbnailGallery />
                <div className="mini">
                  <img
                    src={
                      this.state.posts.files && this.state.posts.files[0].url
                    }
                  />
                </div>
                <div className=" mini">
                  <img
                    src={
                      this.state.posts.files && this.state.posts.files[0].url
                    }
                  />
                </div>
              </div>
            </div>
            <ProductsInfo />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default productsImage;
