import { useState, useEffect, createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { API_URL, emailPattern } from '../config'

const UsersCtx = createContext()

export const useUsers = () => useContext(UsersCtx)



const initialForm = {
    username: '',
    email: '',
    pass: '',
    r_pass: ''
}




export default function Ctx({ children })
{

    const navigate = useNavigate()

    const [Form, setForm] = useState({ ...initialForm })

    const [Account, setAccount] = useState({
        _id: null,
        username: ''
    })

    const [Notify, setNotify] = useState({
        err: false,
        text: ''
    })

    const inputForm = (k, v) => setForm({ ...Form, [k]: v })

    const register = async (e) => {
        e.preventDefault()

        if(Form.username.trim().length < 3)
            return setNotify({ err: true, text: 'Username incorrect' })

        if(Form.email.trim().length < 5 || !emailPattern.test(Form.email))
            return setNotify({ err: true, text: 'Email incorrect' })

        if(Form.pass.trim().length < 5)
            return setNotify({ err: true, text: 'Password min 5 symbols' })

        if(Form.pass != Form.r_pass)
            return setNotify({ err: true, text: 'Repeat password incorrect' })

        console.log(Form)

        try 
        {
            const res = await fetch(`${API_URL}/users/register`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(Form)
            })

            const result = await res.json()

            switch(result.status)
            {
                case 'ok': return setNotify({ err: false, text: 'Register success' })
                case 'exist': return setNotify({ err: true, text: 'This email is exist' })
                default: setNotify({ err: true, text: 'Register error' })
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const login = async (e) => {
        e.preventDefault()

        if(Form.email.trim().length < 5 || !emailPattern.test(Form.email))
            return setNotify({ err: true, text: 'Email incorrect' })

        if(Form.pass.trim().length < 5)
            return setNotify({ err: true, text: 'Password min 5 symbols' })

        console.log(Form)

        try 
        {
            const res = await fetch(`${API_URL}/users/login`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(Form)
            })

            const result = await res.json()

            switch(result.status)
            {
                case 'ok': 
                    localStorage.setItem('t', result.token_login)
                    return navigate('/')

                default: setNotify({ err: true, text: 'Login or password incorrect' })
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const auth = async () => {

        try 
        {
            const token_login = localStorage.getItem('t')

            if(token_login)
            {
                const res = await fetch(`${API_URL}/users/auth?t=${token_login}`)

                const result = await res.json()

                switch(result.status)
                {
                    case 'ok': return setAccount(result.data)
                        
                    default: logout()
                }
            }
            else 
            {
                logout()
            }
             
           
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const logout = () => {
        localStorage.removeItem('t')
        navigate('/login')
    }


    return (
        <>
        <UsersCtx.Provider value={{
            Form, 
            inputForm,
            register,
            login,
            auth,
            logout,
            Account,
            Notify
        }}>
            { children }
        </UsersCtx.Provider>
        </>
    )
}