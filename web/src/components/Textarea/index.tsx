//TEXTAREA COMPONENT
//REACT IMPORTING
import React, {TextareaHTMLAttributes} from 'react';

//CSS IMPORTING
import './styles.css';

//INTERFACE
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;  
}

//TEXTAREA CONSTANT
const Textarea: React.FC<TextareaProps> = ({label, name,  ...rest}) => {
    return (
    <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...rest}/>
    </div>
    );
}

//TEXTAREA EXPORTING
export default Textarea;