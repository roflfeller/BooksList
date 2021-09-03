import React from 'react';
import CustomButton from '../ui/Button';
import MyInput from '../ui/MyInput';
import { useLogicForm } from './useLogicForm';



const FormBook = () => {
    const data = useLogicForm();

    return (
        <form onSubmit={data.formik.handleSubmit} className={'formBook'}>
            {data.fields.map((element) => {
                return (
                    <MyInput
                        name={element.name}
                        value={data.values[element.name]}
                        onChange={data.handleChange}
                        label={element.label}
                        required
                        type={element.type}
                        key={element.name}
                        formik={data.formik}
                    />
                )
            })}
            <CustomButton
                label={'Очистить'}
                onClick={() => data.clearForm()}  
                disabled={data.disabledForClear}
            />
            <CustomButton 
                label={data.renderLabel} 
                type='submit' 
                disabled={data.disabled}
            /> 
        </form>
    )
    
};

export default FormBook;