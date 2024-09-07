import React from 'react'
import "./css/index.css";

type Props = {
    LogOut: () => void;
}

const Home = ({ LogOut }: Props) => {
    return (
        <main className='home-page'>
            <div>
                <button onClick={LogOut}>logout</button>
            </div>
        </main>
    )
}

export default Home