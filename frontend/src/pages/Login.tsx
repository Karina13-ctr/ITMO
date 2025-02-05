import { Link } from 'react-router-dom'
import { useUsers } from '../context/users.context'

export default function Login()
{
    const _users = useUsers()

    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <form className="form" onSubmit={_users.login}>
                        <h2>Login</h2>
                      
                        <div className="py-1">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={ (e) => _users.inputForm('email', e.target.value) } />
                        </div>
                        <div className="py-1">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" onInput={ (e) => _users.inputForm('pass', e.target.value) } />
                        </div>
                      
                        <div className="py-1">
                            <Link to="/register" className="btn btn-primary">Register</Link>
                            <button className='btn btn-success ms-1'>Login</button>
                        </div>

                        <p className="text-danger">{ _users.Notify.text }</p>
                    </form>
                </div>
           </div>
        </>
    )
}