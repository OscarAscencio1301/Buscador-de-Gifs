import React from 'react'

export const Item = ({imagenes}) => {
    return (
        <div className="item">
            <img src={imagenes.url} alt={imagenes.title}/>
            <div className="texto">
            <p>{imagenes.title}</p>
            </div>
        </div>
    )
}
