import React, { useEffect, useRef } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import error404 from '../../error404.svg'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'


const Error404 = () => {

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
        <div className="min-w-screen min-h-screen gradscheme flex items-center p-5 lg:p-20 overflow-hidden relative">
            <div id="errorbox" className="flex-1 min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 relative md:flex items-center text-center md:text-left">
                <div className="w-full md:w-1/2">
                    <div className="mb-10 md:mb-20 font-light">
                        <h1 className="font-black uppercase text-3xl lg:text-5xl mb-10">You seem to be lost!</h1>
                        <p className="text-xl">The page you're looking for isn't available. Try reading the map again! Or just use the Go Back button below. </p>
                    </div>
                    <div className="mb-20 md:mb-0">
                        <NavLink to="/">
                            <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600">                    <Icon path={mdiArrowLeft}
                                title="User Profile"
                                size={1}
                                className="inline mb-1"
                            />

                                Go Back</button> </NavLink>
                    </div>

                </div>

                <div className="w-full md:w-1/2 text-center">
                    <img src={error404} id="errorsvg" className="" />
                </div>
            </div>
        </div>
    )
}

export default Error404;
