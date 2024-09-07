import React from 'react'
import "./css/index.css";
import WriteTweetContainer from '../../components/WriteTweet/container/WriteTweetContainer';

type Props = {
    LogOut: () => void;
}

const Home = ({ LogOut }: Props) => {
    return (
        <main className='home-page'>
            <section className='write-tweet-section'>
                <WriteTweetContainer />

            </section>
        </main>
    )
}

export default Home