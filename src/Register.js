import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register ({url}) {
    const [userName, setUsername] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPass, setPass] = useState('');

function save(e) {
    e.preventDefault()
    let status = 0
    fetch('http://localhost/sg2shop_back/register/register.php', {
      method: 'POST',
      headers: {
        Accept: 'application(json)',
        'Content-type': 'application(json)'
      },
      body: JSON.stringify({
        username: userName,
        email: userEmail,
        passwrd: userPass,
      })
    })
      .then(res => {
        status = parseInt(res.status)
        return res.json()
      })
      .then(
        res => {
          if (status === 200) {
           alert("Rekisteröinti onnistui");
           setUsername('');
           setEmail('');
           setPass('');
          } else {
            alert(res.error)
          }
        },
        error => {
          console.log(error)
        }
      )
  }

  return (
      <div class="container">
          <h3>Rekisteröidy</h3>
          <form onSubmit={save}>
              <div>
                  <label>Käyttäjänimi</label>
                  <input type="text" id="usernm" value={userName} onChange={e => setUsername(e.target.value)}/>
              </div>
              <div>
                  <label>Sähköposti</label>
                  <input type="email" id="sposti" value={userEmail} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div>
                  <label>Salasana</label>
                  <input type="password" id="spass" value={userPass} onChange={e => setPass(e.target.value)}/>
              </div>
              <div>
              <input type="submit" name="register" value="Register"></input>
              </div>
              <div>
                  <Link to='../login'>Kirjaudu</Link>
              </div>
          </form>
      </div>
  )
}