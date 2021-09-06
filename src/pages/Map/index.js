import React, { useEffect, useRef } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

const Map = () => {



    return (
        <>
            <div class="min-w-screen min-h-screen gradscheme flex items-center p-5 lg:p-20 overflow-hidden">
                <div id="mapBox" class="flex-1 rounded-3xl bg-white shadow-xl p-10 lg:p-20 md:flex items-center text-center md:text-left ">
                    <div class="w-full md:w-1/2">
                        <div class="mb-10 md:mb-20 font-light">

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Map;
