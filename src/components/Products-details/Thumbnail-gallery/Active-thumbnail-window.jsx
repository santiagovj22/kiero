import React from "react";
import "./_carrousel-thumbnail.scss";
import { isMobile } from "react-device-detect";
import Thumbnail from "./thumbnail";
import ReactImageZoom from 'react-image-zoom';
import useModal from 'use-react-modal';


//this component receives the active thumbnail and renders into the view
const ActiveThumbnailWindow = ({ activeThumbnail }) => {


  const  {isOpen, openModal, closeModal, Modal}= useModal({background:'rgba(0, 0, 0, 0.5)',closeOnOutsideClick: true,
  closeOnEsc: true,})

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
      <div className="active-thumbnail" style={estilos} onClick={openModal}>
        {/* <img
          className="img-thumbnail-active"
        src = {activeThumbnail.url}
          alt="img thumbnail gallery"
        ></img> */}
         <>
        {isOpen && (
          <Modal>
          <img
          className=" img-grande"
        src = {activeThumbnail && activeThumbnail.url}
          alt="img thumbnail gallery"
        ></img>
          </Modal>
        )}
        </>


        <ReactImageZoom {...props } />


      </div>
    );
  }
};
 
export default ActiveThumbnailWindow;
