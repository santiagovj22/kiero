import React, { Component } from "react";
import Swiper from "react-id-swiper";
import axios from "axios";
import { isMobile } from "react-device-detect";

var params;
var slidesView = 4.4555;
var space = 5;
var slidesGroup = 4.4555;
var free = true;
var slideLoop = false;
var slidesUpdate = true;
var allowTouchMove = true;
let x;

class Slider1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  async componentWillMount() {
    let { data } = await axios.get("http://localhost:5000/products");
    if (data.error) console.error(data.message);
    this.setState({
      posts: data.data
    });
  }

  slider = () => {
    params = {
      slidesPerView: slidesView,
      spaceBetween: space,
      slidesPerGroup: slidesGroup,
      freeMode: free,
      // loop: slideLoop,
      allowTouchMove: allowTouchMove,
      loopFillGroupWithBlank: true,
      shouldSwiperUpdate: slidesUpdate,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      breakpoints: {
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5
        },
        768: {
          slidesPerView: 4.3555,
          slidesPerGroup: 4.3555,
          spaceBetween: 5
        },
        640: {
          slidesPerView: 4.3555,
          slidesPerGroup: 4.3555,
          spaceBetween: 5
        },

        414: {
          slidesPerView: 2.3666,
          slidesPerGroup: 4.4666,
          spaceBetween: 5
        },

        375: {
          slidesPerView: 2.1555,
          slidesPerGroup: 1.3555,
          spaceBetween: 5
        },

        320: {
          slidesPerView: 1.814,
          slidesPerGroup: 2.2444,
          spaceBetween: 5
        }
      }
    };
  };

  render() {
    function number_format_details(price_sale) {
      const pric = price_sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return pric;
    }

    function title_format(title_format) {
      const title = title_format.toString().replace(/ /g, "-");
      return title;
    }

    if (isMobile) {
      this.slider(slidesView);
    } else {
      slidesView = 4;
      space = 10;
      slidesGroup = 4;
      free = true;
      slideLoop = false;
      slidesUpdate = true;
      allowTouchMove = false;
      this.slider();
    }

    const { posts } = this.state;
    const list = posts.length ? (
      posts.map(post => {
        return (
          <div className="item-slide-productss " key={post.productid}>
            <div className=" image">
              <a
                href={
                  "/?id-" + post.Producto_Id + "-" + title_format(post.titulo)
                }
              >
                <img src={post.files[0].url} alt={post.titulo} />
              </a>
            </div>
            <div className="content">
              <div className="item-price">
                <span className="item-symbol">$</span>
                <span className="price">
                  {number_format_details(post.price)}
                </span>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="products"></div>
    );

    if (isMobile) {
      return (
        <section className="slide-item-mb">
          <Swiper {...params}>{list}</Swiper>
        </section>
      );
    } else {
      return (
        <section className="slide-item-p">
          <Swiper {...params}>{list}</Swiper>
        </section>
      );
    }
  }
}
export default Slider1;
