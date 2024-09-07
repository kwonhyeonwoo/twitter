import React from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import CustomInput from '../../components/common/CustomInput/CustomInput';
import CustomBtn from '../../components/common/CustomBtn/CustomBtn';

interface Props {
    error: string;
    isLoading: boolean;
    onAccount: () => void;
    onUpdateData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Account = ({
    error,
    isLoading,
    onAccount,
    onUpdateData
}: Props) => {
    return (
        <main className='account-page'>
            <section className='account-section'>
                <div className='account-wrapper'>
                    <div className='logo-img'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className='card'>
                        <h1 className='card-title'>ACCOUNT</h1>
                        {inputArr.map(({
                            name,
                            placeholder,
                            type,
                            minLength,
                            maxLength }, idx) => (
                            <CustomInput
                                key={idx}
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                minLength={minLength}
                                maxLength={maxLength}
                                onUpdateChange={onUpdateData} required={false} />
                        ))}
                        <CustomBtn isLoading={isLoading} title='ACCOUNT' Active={onAccount} />
                        <div className='link-wrapper'>
                            <Link to={'/login'}>이미 계정이 있으신가요? &rarr;</Link>
                        </div>

                    </div>
                    {error && (
                        <div className='error-msg-box'>
                            <span className='error-msg'>{error}</span>
                        </div>
                    )}
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
        maxLength: 10,
        required: true,
    },
    {
        name: "email",
        placeholder: "E-mail",
        type: "email",
        minLength: 5,
        maxLength: 30,
        required: true,

    },
    {
        name: "password",
        placeholder: "Password",
        type: "password",
        minLength: 5,
        maxLength: 15,
        required: true,
    }
]