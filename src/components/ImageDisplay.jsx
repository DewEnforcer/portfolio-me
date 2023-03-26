import React from 'react'

export default function ImageDisplay({imageUrl, onClose, visible}) {
    if (!visible) return null;

    const handleCloseDisplay = e => {
        const bannedClass = ["image_display_container", "image"]

        if (e && e.stopPropagation) e.stopPropagation();

        const targetClass = [...e.target.classList]

        for (let i = 0; i < bannedClass.length; i++) {
            const cls = bannedClass[i];
            
            if (targetClass.includes(cls)) return;
        }

        onClose();
    }


    return (
        <div onClick={handleCloseDisplay} className="opacity_box">
            <div className="image_display_container">
                <img className='image' src={imageUrl} alt="Project example"/>
                <i onClick={handleCloseDisplay} className="btn_close_display fa fa-times fa-3x" aria-hidden="true"></i>
            </div>
        </div>
    )
}
