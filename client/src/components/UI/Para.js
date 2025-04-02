import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function Para(props) {
  return (
    <Typography 
    variant={props.variant}
    sx={props.sx}
    align={props.align}
    className={props.className}
    color={props.color}
    id={props.id}>{props.text}</Typography>
  )
}
Typography.defaultProps ={

};



Para.propTypes = {
    variant: PropTypes.string,
    sx:PropTypes.string,
    align:PropTypes.string,
    className:PropTypes.string,
    color:PropTypes.string,
    id:PropTypes.string,
    text:PropTypes.string
}


export default Para