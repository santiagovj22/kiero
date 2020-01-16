import React from "react";
import "./_carrousel-thumbnail.scss";
import { isMobile } from "react-device-detect";

const Thumbnail = ({ imgUrl, handleClick, index }) => {
  if (isMobile) {
    return (
      <div>{<img src={imgUrl} alt="img-thumbnails" data-index={index} />}</div>
    );
  } else {
    return (
      <div className="thumbnail">
        {
          <img
            className="img-thumbnail"
            src={imgUrl}
            alt="img-thumbnails"
            onClick={handleClick}
            data-index={index}
            onMouseEnter={handleClick}
          />
        }
      </div>
    );
  }
};

export default Thumbnail;
