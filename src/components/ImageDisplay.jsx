import React from 'react'

export default function ImageDisplay({imageUrl, onClose, visible}) {
    if (!visible) return null;

    return (
        <div className="opacity_box">
            <div className="image_display_container">
                <img src={imageUrl} alt="Project example"/>
                <i onClick={onClose} className="btn_close_display fa fa-times fa-3x" aria-hidden="true"></i>
            </div>
        </div>
    )
}
