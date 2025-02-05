import { useEffect } from "react"
import { useUsers } from '../context/users.context'
import { useTodos } from '../context/todos.context'

import Navbar from '../components/Navbar'
import Todolist from "../components/Todolist"
import Todoform from "../components/Todoform"
import Todotabs from '../components/Todotabs'
import Todopopup from '../components/Todopopup'


export default function Home()
{
    const _users = useUsers()
    const _todos = useTodos()

    useEffect(() => {
        _users.auth()
    }, [])

    useEffect(() => {
       _todos.get()
       localStorage.removeItem('tab')
    }, [_users.Account._id])


    return (
        <>
            <Navbar username={ _users.Account.username } logout={ _users.logout } />
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <Todoform />
                </div>
            </div>    
            <hr />
            <div className="d-flex justify-content-center">
                <Todotabs />
            </div>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    { _todos.Data.length
                        ?
                    <Todolist />
                        :
                    <h2 className="text-muted text-center">No todos</h2>
                    }
                </div>
            </div>

            { _todos.Popup ? <Todopopup /> : null }
           
        </>
    )
}