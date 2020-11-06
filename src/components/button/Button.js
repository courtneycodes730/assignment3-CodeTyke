import React from 'react';
import Loader from "../loader/Loader"

import './Styles.scss';

const Button = (props) => {
  return (
    <div className={"submitButton"} onClick={props.handleSubmit} >
      {props.label}
      {props.showLoader && <span className={"submitButton--loader"}>
        <Loader /> 
      </span> }   
    </div>
  )
}

export default Button;