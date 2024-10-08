import React from 'react'
import Home from '../Home'
import { auth } from '../../../config/firebase'
import { useNavigate } from 'react-router-dom'

const HomeContainer = () => {
    const Navigate = useNavigate();
    const Logout = () => {
        auth.signOut();
    }
    if (auth.currentUser) {
        console.log(auth.currentUser)
    }
    if (!auth.currentUser) {
        Navigate('/account')
    }
    return (
        <Home LogOut={Logout} />
    )
}

export default HomeContainer