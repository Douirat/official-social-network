'use client'
import { authUser } from '../contexts/authContext'
import { useState } from 'react'

export default function HomePage() {
    const { isLoggedIn, login, logout } = authUser()
    const [toggleLogginRegistration, setToggleLogginRegistration] = useState(true)
    return (
        <main>
            {isLoggedIn ? (
                <>
                    <p>wellcome home Ben Doe.</p>
                    <button onClick={logout}>logout</button>
                </>
            ) : (
                <>
                    {
                        toggleLogginRegistration ? (
                            <>
                                <h2>Login</h2>
                                <button onClick={()=> {setToggleLogginRegistration(false)}}>register</button>
                            </>
                        ) : (
                            <>
                                <h2>Registration</h2>
                                <button onClick={()=> {setToggleLogginRegistration(true)}}>loggin</button>
                            </>
                        )
                    }
                </>
            )}
        </main>
    )
}