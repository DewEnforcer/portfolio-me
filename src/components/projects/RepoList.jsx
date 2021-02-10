import React from 'react'

export default function RepoList({repos}) {
    return (
        <div className="sidebar_list repo_list">
            <h2>Repos</h2>
            {repos.map(r => <a key={r.id} target="_blank" rel="noreferrer" href={r.link}>{r.label}</a>)}
        </div>
    )
}
