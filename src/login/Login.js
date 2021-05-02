import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


export default function Login({ setUser }) {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  async function login(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('email', userEmail);
    formData.append('password', password);

    const config = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
      },
      body: formData
    }

    const response = await fetch('http://localhost/sg2shop_back/register/login.php', config);
    const json = await response.json();

    if (response.ok) {
      setUser(json);
      history.push('/login/Profile');
    } else {
      alert("Error logging in.");
    }

  }
  return (
    <div className="row my-3">
      <h3>Kirjaudu sisään</h3>
      <h5>Ei tiliä? Rekisteröidy <Link className="text-success" to="/Register">tästä</Link></h5>
      <form onSubmit={login}>
        <div >
          <label className="my-2 me-2">Sähköposti</label>
          <input value={userEmail} name="usrEmail" onChange={e => setEmail(e.target.value)} />
        </div>
        <br></br>
        <div>
          <label className="my-2 me-2">Salasana</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <input className="btn btn-outline-secondary m-2" type="submit" name="Login" value="Login"></input>
        </div>
      </form>
    </div>
  )
}








