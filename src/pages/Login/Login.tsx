import React from 'react';
import "./css/index.css";
import CustomInput from '../../components/common/CustomInput/CustomInput';
import CustomBtn from '../../components/common/CustomBtn/CustomBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
interface Props {
    isLoading: boolean;
    onAccount: () => void;
    onUpdateData: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onGitgubLogin: () => void;
}

const Login = ({ isLoading, onAccount, onUpdateData, onGitgubLogin }: Props) => {
    return (
        <main className='login-page'>
            <section className='login-section'>
                <div className='logo-img'>
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className='card'>
                    <h1 className='title'>LOGIN</h1>
                    {inputArr.map(({
                        name,
                        placeholder,
                        minLength,
                        maxLength,
                        required,
                        type
                    }, idx) => (
                        <CustomInput
                            name={name}
                            placeholder={placeholder}
                            minLength={minLength}
                            maxLength={maxLength}
                            required={required}
                            type={type}
                            key={idx}
                            onUpdateChange={onUpdateData}
                        />
                    ))}
                    <CustomBtn
                        Active={onAccount}
                        title='Account'
                        isLoading={isLoading}
                    />
                    <div className='link-wrapper'>
                        <Link to={"/account"}>
                            계정이 없으신가요?
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login
const inputArr = [
    {
        required: true,
        name: "email",
        placeholder: "E-mail",
        type: "email",
        minLength: 5,
        maxLength: 30
    },
    {
        required: true,
        name: "password",
        placeholder: "Password",
        type: "password",
        minLength: 5,
        maxLength: 15
    }
]