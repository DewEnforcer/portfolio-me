import React from 'react'

const DEFAULT_CLASSNAME = "sidebar_list";

export default function SidebarList({title, cls = "", items}) {
    cls = DEFAULT_CLASSNAME + " " + cls;

    return (
        <div className={cls}>
            <h2>{title}</h2>
            {items.map((i, k) => <span key={k}>{i}</span>)}
        </div>
    )
}
