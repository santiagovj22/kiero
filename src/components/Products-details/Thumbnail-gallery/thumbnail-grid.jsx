import React from 'react';
import './_carrousel-thumbnail.scss';
import Thumbnail from './thumbnail'

//in this component we render the imgurl, and render the component on clicked element
const ThumbnailGrid =({ thumbnails, handleClick }) => {
    return (
        <div className='grid-thumbnail'>
            {
                thumbnails.files.map((thumbnail, i) => {
                 
                    return(
                        <Thumbnail
                            key={i}
                            imgUrl={thumbnail.url}
                            handleClick={handleClick}
                            index={i}
                        />
                    )
                })
            }
        </div>
    )
}

export default ThumbnailGrid