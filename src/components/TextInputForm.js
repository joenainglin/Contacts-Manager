import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';


const TextInputForm = ({
    name,
    label,
    value,
    type, 
    placeholder,
    onChange,
    error
} ) => {
    return (
        <div className="form-group">
        <label htmlFor="exampleInputName1">{name}</label>
        <input onChange={onChange}
            type={type}
            name={name}
            label={label}
            value={value}
            placeholder={placeholder}
            error={error}
            className={classnames("form-control", {'is-invalid': error})}
            id="exampleInputName1"
            aria-describedby="emailHelp"/>
    {error &&  <div className="invalid-feedback">{error}</div>}
       
    </div>

   
    )
}

TextInputForm.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    eror: PropTypes.string,
  };

export default  TextInputForm;