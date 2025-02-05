import { useState, createContext, useContext, useEffect, useDeferredValue } from 'react'

import { API_URL } from '../config'

import { useUsers } from './users.context'

const TodosCtx = createContext()

export const useTodos = () => useContext(TodosCtx)



const initialForm = {
    title: '',
    date: '',
    complete: false
}

let initialData = []

export default function Ctx({ children })
{
    const _users = useUsers()


    const [Form, setForm] = useState({ ...initialForm })
    const [Data, setData] = useState([])

    const [Popup, setPopup] = useState(false)
    const [Notify, setNotify] = useState({
        err: false,
        text: ''
    })

    const inputForm = (k, v) => setForm({ ...Form, [k]: v })

    const get = async () => {
        try 
        {
          
            const res = await fetch(`${API_URL}/todos?user_id=${_users.Account._id}`)

            const result = await res.json()

            switch(result.status)
            {
                case 'ok': 
                    setNotify({ ...Notify, text: '' })
                    return refreshData(result.data)
                default: setNotify({ err: true, text: 'Get todos error' })
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }
   

    const add = async (e) => {
        e.preventDefault()

        if(Form.title.trim().length < 3)
            return setNotify({ err: true, text: 'Todo title incorrect' })
        console.log(Form)

        try 
        {
            Form.date = new Date().toLocaleString()
            Form.user_id = _users.Account._id

            const res = await fetch(`${API_URL}/todos`, {
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
                    setNotify({ err: false, text: 'Add todo success' })
                    return refreshData(result.data)
                default: setNotify({ err: true, text: 'Create todo error' })
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const changeComplete = async (Form) => {
        
        try 
        {
            Form.user_id = _users.Account._id

            const res = await fetch(`${API_URL}/todos/change`, {
                method: 'put',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(Form)
            })

            const result = await res.json()

            switch(result.status)
            {
                case 'ok': 
                    setNotify({ ...Notify, text: '' })
                    return refreshData(result.data)
                default: setNotify({ err: true, text: 'Change todo status error' })
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const edit = (todo_id) => {

        const exist = Data.find((el) => el._id == todo_id)
        setPopup(true)
        setForm(exist)
    }

    const save = async (e) => {
        e.preventDefault()

        try 
        {
            Form.user_id = _users.Account._id

            const res = await fetch(`${API_URL}/todos`, {
                method: 'put',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(Form)
            })

            const result = await res.json()

            switch(result.status)
            {
                case 'ok': 
                    setNotify({ ...Notify, text: '' })
                    setPopup(false)
                    return refreshData(result.data)
                default: setNotify({ err: true, text: 'Edit todo status error' })
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const remove = async (todo_id) => {
        try 
        {
          
            const res = await fetch(`${API_URL}/todos?user_id=${_users.Account._id}&id=${todo_id}`, {
                method: 'delete'
            })

            const result = await res.json()

            switch(result.status)
            {
                case 'ok': 
                    setNotify({ ...Notify, text: '' })
                    return refreshData(result.data)
                default: setNotify({ err: true, text: 'Get todos error' })
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const refreshData = (data) => {
        initialData = [ ...data ]
        switchTab()
    }

    const switchTab = (tab_type = localStorage.getItem('tab')) => {
        let result = []

        console.log(tab_type)


        switch(tab_type)
        {
            case 'complete': result = initialData.filter((el) => el.complete == true); break;    
            case 'uncomplete': result = initialData.filter((el) => el.complete == false); break;
            default: result = [ ...initialData ]
        }

        localStorage.setItem('tab', tab_type)


        console.log(result)

        
        setData(result)
     
    }

    return (
        <>
        <TodosCtx.Provider value={{
            Form, 
            setForm,
            inputForm,
            Data,
            get,
            add,
            changeComplete,
            edit,
            save,
            remove,
            Notify,
            Popup,
            setPopup,
            switchTab
        }}>
            { children }
        </TodosCtx.Provider>
        </>
    )
}