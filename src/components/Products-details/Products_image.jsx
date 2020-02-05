import React, { Fragment } from "react";
import ProductsInfo from "./Products_info";
import axios from "axios";
import "../../assets/css/products_image.css";
//import Imgprincipal from '../Products-details/Img-principal';
import ThumbnailGallery from '../Products-details/Thumbnail-gallery.jsx/thumbnail-gallery'


class productsImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentWillMount() {
    let { data } = await axios.get(`http://10.4.28.183:5000/products/2502209`);
    if (data.error) return console.error(data.message);
 
    this.setState({
      posts: data.data
    });

  }


  handleCLick=(e)=>{
    console.log('hello')
}
 
  render() {
 
    const {posts}=this.state
    return (
      <Fragment>
         <div className="container">
          <div className="row">

            <div className="col-7 izquierda ">
 {/*
                  <div className="col-10 text im ">
                    <Imgprincipal/>

                  </div>

                  <div className="col-2 img-mini mt-3">
                          <div className="mini" handleCLick={this.handleCLick}>
                              {this.state.posts.files && this.state.posts.files.map(item => <img onClick={this.handleCLick} className="min" src={item.url} alt="" srcset=""/> )}
                          </div>
                  </div>

*/}<ThumbnailGallery/>
            </div> 
          
            
            <ProductsInfo />
          </div>
        </div>
        
          

    

           

      </Fragment>
    );
  }
}





export default productsImage;
