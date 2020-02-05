import React from "react";
import "./_carrousel-thumbnail.scss";
import { isMobile } from "react-device-detect";
import Thumbnail from "./thumbnail";
import ReactImageZoom from 'react-image-zoom';

//this component receives the active thumbnail and renders into the view
const ActiveThumbnailWindow = ({ activeThumbnail }) => {
  if (isMobile) {  
    return (
      <div>
        {activeThumbnail.files.map((thumbnail, i) => {
          return <Thumbnail key={i} imgUrl={thumbnail.url} index={i} />;
        })}
      </div>
    );
  } else {
    const estilos={zIndex:'100',position:'absolute'}
    const props = { width:550, height:500, scale: 1, zoomPosition:'right',zoomWidth:'default',offset:'default', img:activeThumbnail.url }
    return (
      <div className="active-thumbnail" style={estilos}>
        {/* <img
          className="img-thumbnail-active"
        src = {activeThumbnail.url}
          alt="img thumbnail gallery"
        ></img> */}
        <ReactImageZoom {...props } />
      </div>
    );
  }
};
 
export default ActiveThumbnailWindow;