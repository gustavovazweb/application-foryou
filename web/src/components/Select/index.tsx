//SELECT COMPONENT
//REACT IMPORTING
import React, {SelectHTMLAttributes} from 'react';

//CSS IMPORTING
import './styles.css';

//SELECT PROPERTIES INTERFACE
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string; 
    options: Array<{
        value: string;
        label: string;
    }>;
}

//SELECT CONSTANT
const Select: React.FC<SelectProps> = ({label, name, options,  ...rest}) => {
    return (
    //SELECT
    <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select value="" id={name} {...rest}>
            <option value="" disabled hidden>Selecione uma opção</option>
            {options.map(option => {
                return <option key={option.value} value={option.value}>{option.label}</option>
            })}
        </select>
    </div>
    );
}

//SELECT EXPORTING
export default Select;