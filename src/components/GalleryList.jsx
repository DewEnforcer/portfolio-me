import React from 'react'
import ImageList from './ImageList'

import "../styles/GalleryList.css"

export default function GalleryList({title, images, onImageClick}) {
  return (
    <div className='gallery_list'>
        <h2>{title ? title : 'Galerie projektu'}</h2>
        <ImageList images={images} onClick={onImageClick} />
    </div>
  )
}
