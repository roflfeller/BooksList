import React,{useMemo} from 'react';

const MyInput = (props) => {

    const {
        name,
        label,
        type,
        value,
        onChange,
        formik,
        required,
    } = props;

    
    const hasError = Boolean(formik.touched[name] && formik.errors[name]);
        
    return (
        <div className={`MyInput`}>
            <label htmlFor={name} className={'MyInput-label'}>{label || ''} {required && <span className={'MyInput-label__circle'}></span>}</label>
            <input 
                type={type || 'text'}
                value={value}
                name={name}
                id={name}
                onChange={onChange}
                className={`MyInput-input ${hasError ? 'error-field' : ''}`}
            />
            {hasError ? (
              <span className={'MyInput-error'}>{formik.errors[name]}</span>
            ) : null}
        </div>
    )
};

export default MyInput;