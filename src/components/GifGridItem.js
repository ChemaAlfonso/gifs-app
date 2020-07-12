import React from 'react'

export const GifGridItem = ({ id, title, url }) => {

    return (
        <div className="grid-img-wrapper animate__animated animate__fadeIn">
            <img src={ url } alt={ title }/>
        </div>
    )
}
