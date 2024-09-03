import React, { useCallback, useState } from 'react'
import Account from '../Account'

const AccountContainer = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

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
            console.log('data', data)
        },
        [data],
    )


    return (
        <Account
            onAccount={handleAccount}
            onUpdateData={handleUpdateData}
        />
    )
}

export default AccountContainer