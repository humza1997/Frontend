import React, { useEffect, useRef } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';

const Pins = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "password": e.target.messageShav.value
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { "Content-Type": "application/json" }
        };

        fetch('/api/*', options)
            .then(r => r.json())
            .then(() => e.target.reset())
            .catch(console.warn)
    };

    return (
        <>
            Shav
        </>
    )
}

export default Pins;
