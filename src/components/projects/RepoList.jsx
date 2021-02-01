import React from 'react'

export default function RepoList({repos}) {
    return (
        <div className="repo_list">
            {repos.map(r => <a key={r.id} target="_blank" rel="noreferrer" href={r.link}>{r.label}</a>)}
        </div>
    )
}
