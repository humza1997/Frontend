import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { LocationCard, AddButton } from "../../components";
import { useSelector, connect } from "react-redux";

const PinsIndex = () => {
  const pinIndex = useSelector((state) => state.pins);
  console.log(pinIndex.pins);

  // console.log(this.props);

  const renderLocation = () =>
    pinIndex.pins.map((x) => (
      <LocationCard key={x.id} id={x.pin_id} name={x.name} iconClass={x.thumb} border={x.colour} />
    ));

  return (
    <div class='relative'>
      <div class='absolute gradscheme inset-0 z-0'></div>
      <div class='min-h-screen sm:flex sm:flex-row mx-0 justify-center'>
        <div class='flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10'>
          <div class='hidden lg:flex flex-col  text-white'></div>
        </div>
        <div class='flex justify-center self-center z-10'>
          <div class='p-12 bg-white mx-auto rounded-3xl w-full '>
            <div class='mb-4'>
              <h3 class='text-center font-semibold text-2xl text-gray-800'>Pins</h3>

              {renderLocation()}
              <div className='text-center'>
                <AddButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinsIndex;
