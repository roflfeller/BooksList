import React from 'react';


const CustomButton = (props) => {

    const {
        label,
        onClick,
        className,
        type,
        disabled
    } = props;

    const classes = [
        'defaultButton',
        className ? className : '',
        disabled ? 'disabled': ''
    ];

    return (
        <button 
            className={classes.join(' ')} 
            onClick={onClick}
            type={type || 'button'}
            disabled={disabled}
        >
           {label || ''}
        </button>
    )
};

export default CustomButton;