import React from 'react'

export default function TextContainer({title, text, style, cls="", hasBg = true}) {
    cls += " text_container"

    return (
        <div style={style} className={cls}>
            {title && <h1>{title}</h1>}
            {text && <p>{text}</p>}
        </div>
    )
}
