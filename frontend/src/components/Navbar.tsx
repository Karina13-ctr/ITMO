export default function Navbar({ username, logout })
{
    return (
        <>
            <header>
                <div className="container h-100 d-flex justify-content-between align-items-center">
                    <h3 className="text-primary">TodoApp</h3>

                    <div className="d-flex align-items-center">
                        <h5>Hello - { username }</h5>
                        <button className="btn btn-danger ms-2" onClick={ logout }>Logout</button>
                    </div>
                </div>
            </header>
        </>
    )
}