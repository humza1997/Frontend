import React from 'react';

const Modal = (props) => {
    return (
        <div className={props.isItOpen ? 'hidden' : 'font-light fixed w-full h-100 inset-0 overflow-hidden flex justify-center items-center'}
            style={{ background: "rgba(0,0,0,.7)" }}>


            <div className="p-12 bg-white mx-auto rounded-3xl w-3/4 lg:w-1/2 h-auto ">


                <div className="container-content ">

                    <div className="flex justify-end items-center pb-1">

                        <div className="modal-close cursor-pointer  transform transition-all hover:scale-110" onClick={() => props.updateOpen()}>
                            <svg className="mb-1" width="18" height="18"
                                viewBox="0 0 18 18">
                                <path
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                </path>
                            </svg>
                        </div>
                    </div>

                    <h3 className="text-center font-semibold text-2xl text-center">Add Pin</h3>

                    <form >
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium  tracking-wide">Name: </label>
                                <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Pin name" name="name" type="text" defaultValue={props.name}></input>
                            </div>
                            <div className="flex items-center justify-around">
                                <div className="w-full mr-3">
                                    <label htmlFor="Latitude" className="text-sm font-medium  tracking-wide">Latitude: </label>
                                    <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Latitude" name="Latitude" type="text" defaultValue={props.lat}></input>
                                </div>


                                <div className="w-full ml-3">
                                    <label htmlFor="Longitude" className="text-sm font-medium  tracking-wide">Longitude: </label>
                                    <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Longitude" name="Longitude" type="text" defaultValue={props.lng}></input>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="Notes" className="text-sm font-medium  tracking-wide">Notes: </label>
                                <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Notes" name="Notes" type="text"></input>
                            </div>

                            <div className="flex items-center justify-around">
                                <div className="w-full mr-3">
                                    <label htmlFor="tag" className="text-sm font-medium  tracking-wide">Tag: </label>
                                    <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Tag" name="tag" type="text"></input>
                                </div>


                                <div className="w-full ml-3">
                                    <label htmlFor="colour" className="text-sm font-medium  tracking-wide">Colour: </label>
                                    <input className=" shadow-sm border rounded-md w-full px-3 mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Colour" name="colour" type="color"></input>
                                </div>
                            </div>


                            <div className="flex flex-col items-center">
                                <input className=" mt-6 text-white transform transition-all hover:scale-105 cursor-pointer gradscheme rounded-full focus:bg-purple-700 w-auto px-28 font-bold text-lg mx-auto p-2 " name="submit" type="submit" value="Add Pin" />
                            </div>
                        </div>
                    </form>
                </div>







            </div>


        </div>
    );
}

export default Modal;
