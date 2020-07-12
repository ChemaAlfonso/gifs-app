import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const changeHandler = (e) => setInputValue( e.target.value );
    const submitHandler = (e) => {
        e.preventDefault();
        setCategories( cat => inputValue.length > 0 ? [inputValue, ...cat] : [...cat] );
        setInputValue( '' );
    };

    return (
        <form onSubmit={ submitHandler }>
            <input 
            className="addField"
            type="text"
            value={ inputValue }
            onChange={ changeHandler }
            ></input>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
