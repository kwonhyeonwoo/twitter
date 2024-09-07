import React from 'react'
import "./css/index.css"
interface Props {
    isLoading: boolean;
    title: string;
    Active: () => void;
}


const CustomBtn = ({
    isLoading,
    title,
    Active,
}: Props) => {
    return (
        <button onClick={Active} className='custom-btn'>
            {isLoading ? "Loading..." : title}
        </button>
    )
}

export default CustomBtn