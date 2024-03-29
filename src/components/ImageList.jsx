import React from 'react'

export default function ImageList({images, onClick}) {
    return (
        <div className="img_list_container list_images">
            {images.map((i, k) => <img src={i} className="listed_img" key={k} onClick={() => onClick(i)} alt="Project showcase"/>)}
        </div>
    )
}
