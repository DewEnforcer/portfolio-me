import React from 'react'

export default function TextContainer({title, text, style, hasBg = true}) {
    let cls = "text_container"
    if (hasBg) cls += " bg-light";

    return (
        <div style={style} className={cls}>
            {title && <h1>{title}</h1>}
            {text && <p>{text}</p>}
        </div>
    )
}
