import React, { useEffect, useRef } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';

const Profile = () => {

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
            <main>
                <section className="relative block h-1/3 ">
                    <div id="profile-background"
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                    >
                        <span
                            className="w-full h-full absolute opacity-80 gradscheme"
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
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl -mt-64">
                            <div id="profile-box" className="px-6">



                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center h-1">
                                        <div id="profile-picture" className="relative shadow-lg bg-red-500 rounded-full">
                                            <img
                                                alt="profile picture"
                                                src="https://ca.slack-edge.com/THYP60S66-U022X86RDP0-48ec56e5c8f5-512"
                                                className=" absolute w-full h-full bg-center bg-cover rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button
                                                className="gradscheme active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded-md outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                <svg id="search-icon" class="search-icon" class="h-5 inline mr-2" viewBox="0 0 477.873 477.873" fill="white">
                                                    <path d="M392.533,238.937c-9.426,0-17.067,7.641-17.067,17.067V426.67c0,9.426-7.641,17.067-17.067,17.067H51.2
			c-9.426,0-17.067-7.641-17.067-17.067V85.337c0-9.426,7.641-17.067,17.067-17.067H256c9.426,0,17.067-7.641,17.067-17.067
			S265.426,34.137,256,34.137H51.2C22.923,34.137,0,57.06,0,85.337V426.67c0,28.277,22.923,51.2,51.2,51.2h307.2
			c28.277,0,51.2-22.923,51.2-51.2V256.003C409.6,246.578,401.959,238.937,392.533,238.937z M458.742,19.142c-12.254-12.256-28.875-19.14-46.206-19.138c-17.341-0.05-33.979,6.846-46.199,19.149L141.534,243.937    c-1.865,1.879-3.272,4.163-4.113,6.673l-34.133,102.4c-2.979,8.943,1.856,18.607,10.799,21.585    c1.735,0.578,3.552,0.873,5.38,0.875c1.832-0.003,3.653-0.297,5.393-0.87l102.4-34.133c2.515-0.84,4.8-2.254,6.673-4.13    l224.802-224.802C484.25,86.023,484.253,44.657,458.742,19.142z M434.603,87.419L212.736,309.286l-66.287,22.135l22.067-66.202    L390.468,43.353c12.202-12.178,31.967-12.158,44.145,0.044c5.817,5.829,9.095,13.72,9.12,21.955    C443.754,73.631,440.467,81.575,434.603,87.419z" />
                                                </svg> Edit
                                            </button>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-4/12 h-auto px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8 ">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide">
                                                    16
                                                </span>
                                                <span className="text-sm">
                                                    Friends
                                                </span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide">
                                                    10
                                                </span>
                                                <span className="text-sm">
                                                    Lists
                                                </span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide">
                                                    64
                                                </span>
                                                <span className="text-sm">
                                                    Pins
                                                </span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        Humza Muzammal
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                                        London, United Kingdom
                                    </div>
                                    <div className="mb-2 text-blueGray-600 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                        CEO at The Wings Are Good Here
                                    </div>
                                    <div className="mb-2 text-blueGray-600">
                                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                        Wing connoisseur, Hiker and all-around Foodie
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                In 2018, I graduated from Queen Mary University of London, with a BEng in Mechanical Engineering. Shortly after, I started a graduate scheme in Building Services Engineering, working for the largest housing association in London. Two years into my grad scheme, I made the decision to switch careers to tech and I haven’t looked back since!
                                            </p>
                                            <a
                                                href="#"
                                            >
                                                Click to see my Pins
                                            </a>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile;
