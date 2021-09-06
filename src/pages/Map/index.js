import React, { useEffect, useRef } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

const Map = () => {



    return (
        <>
            <main>
                <section className="relative block h-2/3 ">
                    <div id="profile-background"
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                    >
                        <span
                            className="w-full h-full absolute gradscheme"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute overflow-hidden"
                    >
                        <svg
                            className=" bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2560 50"
                            x="0"
                            y="0"
                            fill="white"
                        >
                            <polygon
                                className="fill-current text-white"
                                points="2560 0 2560 50 0 50"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16">
                    <div className="container mx-auto px-4">
                        <div id="mapBox" className="relative flex flex-col min-w-0 break-words bg-white w-full h-5/6 mb-6 shadow-lg rounded-3xl">
                            <div id="profile-box" className="px-6">

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Map;
