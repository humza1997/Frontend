import React, { useEffect, useRef } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

const Map = () => {



    return (
        <>
            <div class="min-w-screen min-h-screen gradscheme flex items-center p-5 lg:p-20 overflow-hidden relative">
                <div id="errorbox" class="flex-1 min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 relative md:flex items-center text-center md:text-left">
                    <div class="w-full md:w-1/2">
                        <div class="mb-10 md:mb-20 font-light">
                            <h1 class="font-black uppercase text-3xl lg:text-5xl mb-10">You seem to be lost!</h1>
                            <p className="text-xl">The page you're looking for isn't available. Try reading the map again! Or just use the Go Back button below. </p>
                        </div>
                        <div class="mb-20 md:mb-0">
                            <NavLink to="/">
                                <button class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600">

                                    Go Back</button> </NavLink>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Map;
