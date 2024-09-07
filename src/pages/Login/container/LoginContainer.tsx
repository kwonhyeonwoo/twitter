import React, { useCallback, useState } from 'react'
import Login from '../Login'
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { auth } from '../../../config/firebase';
import { GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const LoginContainer = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState<string>("");
    const [isLoading, setisLoading] = useState<boolean>(false);
    const handleUpdateData = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setData((prev) => ({
                ...prev,
                [name]: value,
            }))
        },
        [data],
    );
    const handleAccount = useCallback(
        async () => {
            try {
                setisLoading(true);
                const { email, password } = data;
                const response = signInWithEmailAndPassword(auth, email, password);
                navigate("/")
                return response;
            } catch (error) {
                if (error instanceof FirebaseError) {
                    console.log('This email is already registered.');
                } else {
                    console.log('error', error);
                }
            }
        },
        [data],
    )

    const handleGitHubLogin = useCallback(
        async () => {
            try {
                setisLoading(true);
                const provider = new GithubAuthProvider();
                const result = await signInWithPopup(auth, provider);
                navigate('/');  // 로그인 성공 시 리디렉션
            } catch (error) {
                console.log(error)
            }
        },
        []
    );



    return (
        <Login
            isLoading={isLoading}
            onUpdateData={handleUpdateData}
            onAccount={handleAccount}
            onGitgubLogin={handleGitHubLogin}
        />
    )
}

export default LoginContainer