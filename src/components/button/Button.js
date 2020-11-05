import React from 'react';
import Loader from "../loader/Loader"

import './Styles.scss';

const Button = (props) => {
  const {showLoader} = props;

  if (showLoader) {
    return (
      <div className={"submitButton"} onClick={props.handleSubmit} >
        {props.label}
        <span className={"submitButton--loader"}>
          <Loader /> 
        </span>
      </div>
    )
  } else {
    return (
      <div className={"submitButton"} onClick={props.handleSubmit} >
        {props.label}
      </div>
    )
  }
}

export default Button;