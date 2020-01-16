import React from "react";
import "./_carrousel-thumbnail.scss";
import Thumbnail from "./thumbnail";

const ThumbnailGrid = ({ thumbnails, handleClick }) => {
  return (
    <div className="grid-thumbnail">
      {thumbnails.map((thumbnail, i) => {
        return (
          <Thumbnail
            key={i}
            imgUrl={thumbnail}
            handleClick={handleClick}
            index={i}
          />
        );
      })}
    </div>
  );
};

export default ThumbnailGrid;
