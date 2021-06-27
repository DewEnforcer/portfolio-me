import React from 'react'

const DEFAULT_CLASSNAME = "sidebar_list";

export default function SidebarList({title, cls = "", items}) {
    cls = DEFAULT_CLASSNAME + " " + cls;

    return (
        <div className={cls}>
            <h2>{title}</h2>
            {items.map((i, k) => {
                if (!i.label) return <span key={k}>{i}</span>;

                return <a key={k} className="sidebar_list_link" target="_blank" rel="noreferrer" href={i.link}>{i.label}</a>
            })}
        </div>
    )
}
