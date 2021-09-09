import React, { useEffect, useRef } from 'react';
import './styleHome.css'
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { shuffle } from "../../actions"

const Home = () => {

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
        <div className="relative"><div className="absolute gradscheme inset-0 z-0"></div>
            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div className="hidden lg:flex flex-col  text-white">

                        <h1 className="mb-3 font-bold text-5xl text-center h-40 ">
                            <Typewriter
                                options={{
                                    strings: shuffle(['Got any good recommendations?', 'I should take a note of that restaurant you mentioned!', 'That\'s a cool hiking spot, let me make a note!', 'I should take my S.O there too! Let me pin it :)', 'I\'m hungry! I wonder if any of my pinned restaurants are nearby...', 'Now I\'m here, what were the places I wanted to see in Italy again?', 'I just shared my holiday list with you! Can\'t wait to get to Tenerife!']),
                                    autoStart: true,
                                    loop: true,
                                }}
                            />

                        </h1>
                        <div className="border-t w-10/12 mx-auto mb-6"></div>
                        <p className="pr-3 leading-6 text-center ">Welcome to PinPlace! We are a quick, at-hand app to jot down, sort, organize, annotate, and share location wish lists of places you want to visit</p>
                    </div>
                </div>
                <div className="flex justify-center self-center z-10">
                    <div className="p-12 bg-white mx-auto rounded-3xl w-full ">

                        <Switch>
                            <Route exact path="/">
                                <div className="mb-4">
                                    <h3 className="text-center font-semibold text-2xl text-gray-800">Sign In </h3>
                                    <p className="text-center text-gray-500 mt-3">Please sign in to use PinPlace</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="space-y-5">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium  tracking-wide">Email: </label>
                                            <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="email@example.com" name="email" type="email"></input>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="password" className="mb-5 text-sm font-medium  tracking-wide">
                                                Password
                                            </label>
                                            <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" name="password" type="password" placeholder="Enter password"></input>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"></input>
                                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                                                    Remember me
                                                </label>
                                            </div>
                                            <div className="text-sm">
                                                <a href="#" className="text-purple-400 hover:text-purple-500 hover:underline">
                                                    Forgot your password?
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <input className=" text-white gradscheme transform transition-all hover:scale-110 cursor-pointer  rounded-full focus:bg-purple-700 w-full px-28 font-bold text-lg mx-auto p-2 " name="submit" type="submit" value="Sign in" />
                                        </div>
                                    </div>
                                </form>
                                <div className="pt-5 text-center text-gray-400 text-xs">
                                    <span>
                                        Don't have an account yet? Sign up
                                        <NavLink to="register" activeClassName="current" className="text-purple-400 transform transition-all hover:scale-110 hover:text-purple-500 hover:underline"> here.</NavLink></span>
                                </div>
                            </Route>
                            <Route path="/register">
                                <div className="mb-4">
                                    <h3 className="text-center font-semibold text-2xl text-gray-800">Register</h3>
                                    <p className="text-center text-gray-500 mt-3">Please register to use PinPlace</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="space-y-5">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium  tracking-wide">Email: </label>
                                            <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="email@example.com" name="email" type="email"></input>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="username" className="text-sm font-medium  tracking-wide">Username: </label>
                                            <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Username" name="username" type="text"></input>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="password" className="mb-5 text-sm font-medium  tracking-wide">
                                                Password
                                            </label>
                                            <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" name="password" type="password" placeholder="Enter password"></input>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="password2" className="mb-5 text-sm font-medium  tracking-wide">
                                                Confirm Password
                                            </label>
                                            <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" name="password2" type="password" placeholder="Confirm password"></input>
                                        </div>
                                        <div>
                                            <input className=" text-white transform transition-all hover:scale-110 cursor-pointer gradscheme rounded-full focus:bg-purple-700 w-full px-28 font-bold text-lg mx-auto p-2 " name="submit" type="submit" value="Register" />
                                        </div>
                                    </div>
                                </form>
                                <div className="pt-5 text-center text-gray-400 text-xs">
                                    <span>
                                        Already have an account? Log in
                                        <NavLink to="/" activeClassName="current" className="text-purple-400 hover:text-purple-500 hover:underline"> here.</NavLink></span>
                                </div>
                            </Route>
                        </Switch>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
