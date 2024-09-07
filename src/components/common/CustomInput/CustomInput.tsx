import React from 'react'
import "./css/index.css";

interface Props {
    type: string;
    placeholder: string;
    minLength: number;
    maxLength: number;
    value?: string;
    required: boolean;
    onUpdateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}


const CustomInput = ({
    type,
    placeholder,
    minLength,
    maxLength,
    required,
    value,
    name,
    onUpdateChange,
}: Props) => {
    return (
        <input
            className='custom-input'
            type={type}
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            value={value}
            required={required}
            onChange={onUpdateChange}
            name={name}
        />
    )
}

export default CustomInput