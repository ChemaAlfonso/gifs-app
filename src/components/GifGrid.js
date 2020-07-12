import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { newRandNumber } from '../helpers/uniqueRandom';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <div>
            <h3>{ category }</h3>
            { loading && <h2>Cargando...</h2>}
            { !loading && images.length === 0 && <h2>No hay coincidencias</h2>}
            <div className="grid-imgs-wrapper">
                { 
                    images.map( ( img ) => (
                        <GifGridItem 
                            key={ img.id + newRandNumber() } 
                            { ...img } 
                        />
                    ))
                }
            </div>
        </div>
    )
}
