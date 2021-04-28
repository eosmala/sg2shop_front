import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

export default function Profile() {
    const [userInfo, setInfo] = useState([]);

    useEffect(() => {
        async function user() {
            try {
                const response = await fetch("http://localhost/sg2shop_back/register/customerinfo.php")
                const json = await response.json();

                if (response.ok) {
                    setInfo(json);
                } else {
                    alert(json.error);
                }
            } catch (error) {
                alert(error);
            }
        }
        user()
    },[])

    return (
        <div className="container">
            <h3>Käyttäjätiedot</h3>
            <ul class="list-unstyled">
                {userInfo.map(customer => (
                    <li>Käyttäjänimi: {customer.username}</li>
                ))}
            </ul>
            <ul class="list-unstyled">
                {userInfo.map(customer =>(
                    <li>Sähköposti: {customer.email}</li>
                ))}
            </ul>
            <ul class="list-unstyled">
                {userInfo.map(customer =>(
                    <li>Rekisteröitynyt: {customer.added}</li>
                ))}
            </ul>
            <ul class="list-unstyled">
                {userInfo.map(customer =>(
                    <li>Nimi: {customer.firstName} {customer.lastName}</li>
                ))}
            </ul>
            <ul class="list-unstyled">
                {userInfo.map(customer =>(
                    <li>Osoite: {customer.streetAddress}</li>
                ))}
            </ul>
            <ul class="list-unstyled">
                {userInfo.map(customer =>(
                    <li>Postinumero: {customer.zipcode}</li>
                ))}
            </ul>
            <ul class="list-unstyled">
                {userInfo.map(customer =>(
                    <li>Kaupunki: {customer.city}</li>
                ))}
            </ul>
            <ul class="list-unstyled">
                {userInfo.map(customer =>(
                    <li>Maa: {customer.country}</li>
                ))}
            </ul>
            <ul class="list-unstyled">
                {userInfo.map(customer =>(
                    <li>Puhelin: {customer.phonenumber}</li>
                ))}
            </ul>

            <div>
                <h3>Likes</h3>
            </div>
        </div>
        )
    }