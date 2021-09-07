import React, { useEffect, useRef } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Pins = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.messageShav.value,
        };

        const options = {
            method: "POST",
            body: JSON.stringify(postData),
            headers: { "Content-Type": "application/json" },
        };

        fetch("/api/*", options)
            .then((r) => r.json())
            .then(() => e.target.reset())
            .catch(console.warn);
    };

    return (
        <div className='relative'>
            <div className='absolute gradscheme inset-0 z-0'></div>
            <div className='min-h-screen sm:flex sm:flex-row mx-0 justify-center'>
                <div className='flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10'>
                    <div className='hidden lg:flex flex-col  text-white'></div>
                </div>
                <div className='flex justify-center self-center z-10'>
                    <div className='p-12 bg-white mx-auto rounded-3xl w-full '>
                        <div className='mb-4'>
                            <h1>Name:</h1>
                            <p>Padella</p>
                            <br />
                            <h1>Location:</h1>
                            <p>Via della Paglia, 00153 Roma RM</p>
                            <br />
                            <h1>Tags:</h1>
                            <p>Italian Restaurant</p>
                            <br />
                            <h2>View On Map</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pins;
