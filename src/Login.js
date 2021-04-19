
import React from 'react';
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        
        <Link classname="nav-link text-decoration-none rounded" id="login" to="/loginhere">
         Login
        </Link>


    )
}


/*import React from 'react'
import {Link} from 'react-router-dom';




export default function Login() {
return (
<div>
    <h3>Login</h3>
<form onSubmit={login}>
    <div>
        <label>Username</label>
        <input value={username} onChange={e => setUsername(e.target.value)}/>
    </div>
    <div>
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.targer.value)}/>
    </div>
    <div>
        <button>Login</button>
    </div>
</form>
</div>

)

} */