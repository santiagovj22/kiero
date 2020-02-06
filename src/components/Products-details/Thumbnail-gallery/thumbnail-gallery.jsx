import React, { Component } from "react";
import ActiveThumbnailWindow from "./Active-thumbnail-window";
import "./_carrousel-thumbnail.scss";
import ThumbnailGrid from "./thumbnail-grid";
import axios from "axios";
import {isMobile} from 'react-device-detect'
import Swiper from 'react-id-swiper';

import cookie from "react-cookies";

class ThumbnailGallery extends Component {
  state = {
    thumbnails: [],
    activeIndex: 0
  };

  async componentDidMount() {
    let { data } = await axios.get(`http://10.4.28.183:5000/products/2502209`);
    if (data.error) return console.error(data.message);
   
    this.setState({
      thumbnails: data.data
    });

  
    //get the url id
    
    
  }
  //here we render all the photos and send to two components called thumbnailgrid and activethumbnailwindow..
  //then set default photo to show to default [0] first image in ActiveThumbnailWindow.
  renderThumbnails = () => {
    const { thumbnails, activeIndex } = this.state;
    if (thumbnails.length) {
      return (
        <>
          <ThumbnailGrid
            thumbnails={thumbnails}
            handleClick={this.handleClick}
          />
          
          <ActiveThumbnailWindow
            activeThumbnail={thumbnails.files[activeIndex]} 
   

          />
        </>
      );
    }
    return null;
  };
  handleClick = e => {
    const newActiveIndex = e.target.getAttribute("data-index");
    this.setState({ activeIndex: newActiveIndex });
  };
  render() {
  if(isMobile){      
      const params = {
        pagination: {
          el: '.swiper-pagination',         
          clickable: false
        },
        containerClass: 'banner-mobile__imgContainer'
      }     
      const { thumbnails} = this.state;
    
      const lstImg = 
        thumbnails.files.map((thumbnail, i) => {
        return (
           <img  className='banner-mobile__img' src={thumbnail.url} key={i}alt='img-thumbnails'/>
        );      
       
      })
    
    return(
      <section className="banner-mobile">
        <Swiper {...params} shouldSwiperUpdate>
          {lstImg}
        </Swiper>
      </section>
    )
  }
  else{
    return (
      <div className='left-container'>
        <div className="left-thumbnail">{this.renderThumbnails()}</div>
        <div className="p-description"></div>
      </div>
    );
  }
  }
}
export default ThumbnailGallery;