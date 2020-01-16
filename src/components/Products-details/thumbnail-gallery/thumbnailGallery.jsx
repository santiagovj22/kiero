import React, { Component } from "react";
import ActiveThumbnailWindow from "./ActiveThumbnail";
import "./_carrousel-thumbnail.scss";
import ThumbnailGrid from "./thumbnailGrid";
import axios from "axios";
import { isMobile } from "react-device-detect";
import Swiper from "react-id-swiper";

class ThumbnailGallery extends Component {
  state = {
    thumbnails: [],
    activeIndex: 0
  };

  async componentDidMount() {
    let { data } = await axios.get("http://localhost:5000/products/5");
    if (data.error) console.error(data.message);
    this.setState({
      thumbnail: data.data
    });
  }

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
            activeThumbnail={thumbnails[[activeIndex][0]]}
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
    if (isMobile) {
      const params = {
        pagination: {
          el: ".swiper-pagination",
          clickable: false
        },
        containerClass: "banner-mobile__imgContainer"
      };
      const { thumbnails } = this.state;

      const lstImg = thumbnails.map((thumbnail, i) => {
        return (
          <img
            className="banner-mobile__img"
            src={thumbnail}
            key={i}
            alt="img-thumbnails"
          />
        );
      });

      return (
        <section className="banner-mobile">
          <Swiper {...params} shouldSwiperUpdate>
            {lstImg}
          </Swiper>
        </section>
      );
    } else {
      return (
        <div className="left-container">
          <div className="left-thumbnail">{this.renderThumbnails()}</div>
          <div className="p-description"></div>
        </div>
      );
    }
  }
}

export default ThumbnailGallery;
