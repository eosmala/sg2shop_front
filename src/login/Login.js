import React,{useState} from 'react';
import { useHistory } from 'react-router';


export default function Login({setUser}) {
  const [userEmail, setEmail] = useState('');
  const [password,setPassword] = useState('');

  let history = useHistory();

  async function login(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('email',userEmail);
    formData.append('password',password);

    const config = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept' : 'application/json',
      },
      body: formData
    }

    const response = await fetch('http://localhost/sg2shop_back/register/login.php',config);
    const json = await response.json();

    if (response.ok) {
      setUser(json);
      history.push('/login/Profile');
    } else {
      alert("Error logging in.");
    }
    
  }
    return (     
        <div>     
    <h3>Login</h3>
<form onSubmit={login}>
    <div>
        <label>Email</label>
        <input value={userEmail} name="usrEmail" onChange={e => setEmail(e.target.value)}/>
    </div>
    <br></br>
    <div>
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
    </div>
    <div>
        <input type="submit" name="Login" value="Login"></input>
    </div>
</form>
</div> 
    )
}








