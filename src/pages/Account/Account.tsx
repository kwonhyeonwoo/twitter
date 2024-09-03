import React from 'react';
import "./css/index.css";

interface Props {
    onAccount: () => void;
    onUpdateData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Account = ({ onAccount, onUpdateData }: Props) => {
    return (
        <main className='account-page'>
            <section className='account-section'>
                <div className='account-wrapper'>
                    <div className='title-wrapper'>
                        <h1 className='title'>Login</h1>
                    </div>
                    <div className='input-wrapper'>
                        {inputArr.map(({ name, placeholder, type, minLength, maxLength }, idx) => (
                            <input
                                className='input'
                                key={idx}
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                minLength={minLength}
                                maxLength={maxLength}
                                onChange={onUpdateData}
                            />
                        ))}
                        <button onClick={onAccount} className='account-btn'>Account</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Account;

const inputArr = [
    {
        name: "name",
        placeholder: "Name",
        type: "text",
        minLength: 3,
        maxLnegth: 10,
    },
    {
        name: "email",
        placeholder: "E-mail",
        type: "email",
        minLength: 5,
        maxLength: 30
    },
    {
        name: "password",
        placeholder: "Password",
        type: "password",
        minLength: 5,
        maxLength: 15
    }
]