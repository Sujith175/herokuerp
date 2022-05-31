import React from 'react'
import './assets/css/login.css';
import { useState } from 'react';

const FormInput = (props) => {
  console.log(props)
    const [focused, setFocused] = useState(false);
    const {label, errormessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
        console.log(props.firstname);
      };


  return (
    <>
   <input 
   {...inputProps}
   onChange={onChange}
   onBlur={handleFocus}
   focused={focused.toString()}
   onFocus={() =>
     inputProps.name === "confirmPassword" && setFocused(true)
   }
   />
   <span className="errorSpan">{errormessage}</span>
    </>
  )
}

export default FormInput