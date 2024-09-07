import React from 'react'
import "./css/index.css";
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'

const Layout = () => {
    return (
        <div className='layout'>
            {imgArr.map(({ img }, idx) => (
                <div className='circle' key={idx}>
                    {img}
                </div>
            ))}
        </div>
    )
}

export default Layout;

const imgArr = [
    {
        img: <FontAwesomeIcon icon={faHouse} />
    },
    {
        img: <FontAwesomeIcon icon={faUser} />
    },
    {
        img: <FontAwesomeIcon icon={faRightFromBracket} />
    }
]