import React, { useEffect, useRef } from 'react';
import './styleHome.css'
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

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
        <div class="relative"><div class="absolute gradscheme inset-0 z-0"></div>
            <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div class="hidden lg:flex flex-col  text-white">

                        <h1 class="mb-3 font-bold text-5xl"><img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="70" class="inline" /> Hi! Any good recommendations?</h1>
                        <p class="pr-3 leading-6 ">Welcome to PinPlace! We are a quick, at-hand app to jot down, sort, organize, annotate, and share location wish lists of places you want to visit</p>
                    </div>
                </div>
                <div class="flex justify-center self-center z-10">
                    <div class="p-12 bg-white mx-auto rounded-3xl w-full ">

                        <Switch>
                            <Route exact path="/">
                                <div class="mb-4">
                                    <h3 class="text-center font-semibold text-2xl text-gray-800">Sign In </h3>
                                    <p class="text-center text-gray-500 mt-3">Please sign in to use PinPlace</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div class="space-y-5">
                                        <div class="space-y-2">
                                            <label htmlFor="email" class="text-sm font-medium  tracking-wide">Email: </label>
                                            <input class=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="email@example.com" name="email" type="email"></input>
                                        </div>
                                        <div class="space-y-2">
                                            <label htmlFor="password" class="mb-5 text-sm font-medium  tracking-wide">
                                                Password
                                            </label>
                                            <input class=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" name="password" type="password" placeholder="Enter password"></input>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"></input>
                                                <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                                                    Remember me
                                                </label>
                                            </div>
                                            <div class="text-sm">
                                                <a href="#" class="text-purple-400 hover:text-purple-500 hover:underline">
                                                    Forgot your password?
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <input class=" text-white gradscheme rounded-full focus:bg-purple-700 w-full px-28 font-bold text-lg mx-auto p-2 " name="submit" type="submit" value="Sign in" />
                                        </div>
                                    </div>
                                </form>
                                <div class="pt-5 text-center text-gray-400 text-xs">
                                    <span>
                                        Don't have an account yet? Sign up
                                        <NavLink to="register" activeClassName="current" class="text-purple-400 hover:text-purple-500 hover:underline"> here.</NavLink></span>
                                </div>
                            </Route>
                            <Route path="/register">
                                <div class="mb-4">
                                    <h3 class="text-center font-semibold text-2xl text-gray-800">Register</h3>
                                    <p class="text-center text-gray-500 mt-3">Please register to use PinPlace</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div class="space-y-5">
                                        <div class="space-y-2">
                                            <label htmlFor="email" class="text-sm font-medium  tracking-wide">Email: </label>
                                            <input class=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="email@example.com" name="email" type="email"></input>
                                        </div>
                                        <div class="space-y-2">
                                            <label htmlFor="username" class="text-sm font-medium  tracking-wide">Username: </label>
                                            <input class=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Username" name="username" type="text"></input>
                                        </div>
                                        <div class="space-y-2">
                                            <label htmlFor="password" class="mb-5 text-sm font-medium  tracking-wide">
                                                Password
                                            </label>
                                            <input class=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" name="password" type="password" placeholder="Enter password"></input>
                                        </div>
                                        <div class="space-y-2">
                                            <label htmlFor="password2" class="mb-5 text-sm font-medium  tracking-wide">
                                                Confirm Password
                                            </label>
                                            <input class=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" name="password2" type="password" placeholder="Confirm password"></input>
                                        </div>
                                        <div>
                                            <input class=" text-white gradscheme rounded-full focus:bg-purple-700 w-full px-28 font-bold text-lg mx-auto p-2 " name="submit" type="submit" value="Register" />
                                        </div>
                                    </div>
                                </form>
                                <div class="pt-5 text-center text-gray-400 text-xs">
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
