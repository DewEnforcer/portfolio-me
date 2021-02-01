import React from 'react'

export default function TextContainer({title, text, hasBg = true}) {
    let cls = "text_container"
    if (hasBg) cls += " bg-light";

    return (
        <div className={cls}>
            {title && <h1>{title}</h1>}
            {text && <p>{text}</p>}
        </div>
    )
}
