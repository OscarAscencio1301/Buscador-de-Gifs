import React from 'react'
import PropTypes from 'prop-types';

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

Item.propTypes = {
    imagenes: PropTypes.object.isRequired
}