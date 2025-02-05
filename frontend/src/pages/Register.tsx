import { Link } from 'react-router-dom'
import { useUsers } from '../context/users.context'

export default function Register()
{
    const _users = useUsers()

    return (
        <>
           <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <form className="form" onSubmit={_users.register}>
                        <h2>Register</h2>
                        <div className="py-1">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" onInput={ (e) => _users.inputForm('username', e.target.value) } />
                        </div>
                        <div className="py-1">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={ (e) => _users.inputForm('email', e.target.value) }/>
                        </div>
                        <div className="py-1">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" onInput={ (e) => _users.inputForm('pass', e.target.value) } />
                        </div>
                        <div className="py-1">
                            <label htmlFor="" className="form-label">Repeat password</label>
                            <input type="text" className="form-control" onInput={ (e) => _users.inputForm('r_pass', e.target.value) }/>
                        </div>
                        <div className="py-1">
                            <button className="btn btn-success">Register</button>
                            <Link to="/login" className='btn btn-primary ms-1'>Login</Link>
                        </div>

                        <p className={`text-${ _users.Notify.err ? 'danger' : 'success' }`}>{ _users.Notify.text }</p>
                    </form>
                </div>
           </div>
        </>
    )
}