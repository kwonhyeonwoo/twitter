import React, { useCallback, useState } from 'react'
import Account from '../Account'
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, updateProfile } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

const AccountContainer = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
                const { name, email, password } = data;
                setIsLoading(true);
                const response = await createUserWithEmailAndPassword(auth, email, password);
                const emailCheck = await fetchSignInMethodsForEmail(auth, email)
                if (emailCheck.length > 0) return console.log('이미 가입 된 이메일 입니다.')
                await updateProfile(response.user, { displayName: name });
                navigate('/')
            } catch (error) {
                if (error instanceof FirebaseError) {
                    setIsLoading(false);
                    setError("This email is already registered.")
                }
            }
        },
        [data, isLoading],
    )


    return (
        <Account
            error={error}
            isLoading={isLoading}
            onAccount={handleAccount}
            onUpdateData={handleUpdateData}
        />
    )
}

export default AccountContainer