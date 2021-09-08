import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMapMarkerPlus, mdiFilter } from "@mdi/js";

const Map = () => {
  return (
    <>
      <div class='min-w-screen min-h-screen gradscheme flex items-center p-20 overflow-hidden'>
        <div id='mapBox' class='flex-1 rounded-3xl bg-white shadow-xl p-20 lg:p-20 flex items-center text-center '>
          <div class='w-full'>
            <div class=' mb-5 font-light flex flex-wrap justify-around items-center'>
              <NavLink to='/map/addpin' activeClassName='current'>
                <button
                  className='gradscheme transform transition-all hover:scale-110 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded-md outline-none focus:outline-none sm:mr-2 mb-1 md:pt-3 md:pr-5 ease-linear transition-all duration-150'
                  type='button'
                >
                  <Icon path={mdiMapMarkerPlus} title='User Profile' size={1} className='inline md:mb-1 md:mr-1' />{" "}
                  <span className='hidden md:inline-block'> Add Pin </span>
                </button>
              </NavLink>

              <h3 className='text-4xl font-semibold leading-normal text-center'>
                Map <span className='hidden md:inline-block'> it Out! </span>
              </h3>

              <NavLink to='/map/filter' activeClassName='current'>
                <button
                  className='gradscheme transform transition-all hover:scale-110 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded-md outline-none focus:outline-none sm:mr-2 mb-1 md:pt-3 md:pr-5 ease-linear transition-all duration-150'
                  type='button'
                >
                  <Icon path={mdiFilter} title='User Profile' size={1} className='inline md:mb-1' />{" "}
                  <span className='hidden md:inline-block'> Filter </span>
                </button>
              </NavLink>
            </div>

            <div
              className='border heightcustom shadow-md rounded-3xl focus:outline-none focus-within:border-purple-400 transition-all duration-500 bg-center bg-cover'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
