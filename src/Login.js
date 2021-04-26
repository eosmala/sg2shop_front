import React,{useState} from 'react';
import { useHistory } from 'react-router';

export default function Login({setUser}) {
 
   
    
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');

  let history = useHistory();

  async function login(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('username',username);
    formData.append('password',password);

    const config = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept' : 'application/json',
      },
      body: formData
    }

    const response = await fetch('http://localhost:3000/login.php',config);
    const json = await response.json();

    if (response.ok) {
      setUser(json);
      history.push('/');
    } else {
      alert("Error logging in.");
    }

  }
    return (
        
        <div>
           
    <h3>Login</h3>
<form onSubmit={login}>
    <div>
        <label>Username</label>
        <input value={username} onChange={e => setUsername(e.target.value)}/>
    </div>
    <br></br>
    <div>
        <label>Password</label>
        <input value={password} onChange={e => setPassword(e.targer.value)}/>
    </div>
    <div>
        <button>Login</button>
    </div>
</form>
</div> 


    )
}










