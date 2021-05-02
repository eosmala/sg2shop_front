import React, { useState } from 'react'
import {Redirect } from 'react-router-dom'
import { useHistory } from 'react-router';

export default function EditProfile() {

  let history = useHistory();

    const [userName, setUsername] = useState('');
    const [userEmail, setEmail] = useState('');
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [address, setAdd] = useState('');
    const [zipcode, setZip] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');


    function save(e) {
      e.preventDefault()
      let status = 0
      fetch('http://localhost/sg2shop_back/register/EditProfile.php', {
        method: 'POST',
        headers: {
          Accept: 'application(json)',
          'Content-type': 'application(json)'
        },
        body: JSON.stringify({
          username: userName,
          email: userEmail,
          firstName: firstName,
          lastName: lastName,
          streetAddress: address,
          zipcode: zipcode,
          city: city,
          country: country,
          phonenumber: phone,
        })
      })
        .then(res => {
          status = parseInt(res.status)
          return res.json()
        })
        .then(
          res => {
            if (status === 200) {
             alert("Tiedot tallennettu");
             history.push('login/Profile');
            } else {
              alert(res.error)
            }
          },
          error => {
            alert(error)
          }
        )
    }

  return (     
    <div>     
<h3>Muokkaa profiilia</h3>
<form onSubmit={save}>
<div>
    <label>Käyttäjänimi</label><br></br>
    <input type="text" value={userName} onChange={e => setUsername(e.target.value)}/>
</div>
<div>
    <label>Sähköposti</label><br></br>
    <input type="text" value={userEmail} required onChange={e => setEmail(e.target.value)}/>
</div>
<div>
    <label>Etunimi</label><br></br>
    <input type="text" value={firstName} onChange={e => setFirst(e.target.value)}/>
</div>
<div>
    <label>Sukunimi</label><br></br>
    <input type="text" value={lastName} onChange={e => setLast(e.target.value)}/>
</div>
<div>
    <label>Osoite</label><br></br>
    <input type="text" value={address} onChange={e => setAdd(e.target.value)}/>
</div>
<div>
    <label>Postinumero</label><br></br>
    <input type="number" value={zipcode} onChange={e => setZip(e.target.value)}/>
</div>
<div>
    <label>Kaupunki</label><br></br>
    <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
</div>
<div>
    <label>Maa</label><br></br>
    <input type="text" value={country} onChange={e => setCountry(e.target.value)}/>
</div>
<div>
    <label>Puhelinnumero</label><br></br>
    <input type="number" value={phone} onChange={e => setPhone(e.target.value)}/>
</div><br></br>
<div>
    <input type="submit" value="Tallenna"></input>
</div>
</form>
</div> 
)
}