import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { newRandNumber } from './helpers/uniqueRandom';

const GifApp = () => {

    const [categories, setCategories] = useState(['CSGO']);

    return (
        <>
            <h2>Gifs App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                { categories.map( cat => <GifGrid key={ cat + newRandNumber() } category={ cat } />) }
            </ol>
        </>
    );
}

export default GifApp;