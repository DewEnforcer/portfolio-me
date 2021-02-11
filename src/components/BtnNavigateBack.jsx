import React from 'react'

export default function BtnNavigateBack({onClick}) {
    return (
        <i onClick={onClick} className="fa fa-arrow-left btn_goback"></i>
    )
}
