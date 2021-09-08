import React, { useEffect, useRef, useState } from "react";
import { useSelector, connect } from "react-redux";
import "./style.css";
import { NavLink, useParams, withRouter } from "react-router-dom";

const Pins = (props) => {
  let name = props.match.params.id;
  const pin1 = useSelector((state) => state.pins.pins);
  let pinInfo = pin1[name - 1];

  let pinTitle = pinInfo.name;
  let pinLocation = pinInfo.location;
  let pinTags = pinInfo.tags;

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
              <h1>Name:</h1>
              <p>{pinTitle}</p>
              <br />
              <h1>Location:</h1>
              <p>{pinLocation}</p>
              <br />
              <h1>Tags:</h1>
              <p>{pinTags}</p>
              <br />
              <h2>View On Map</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};
export default withRouter(Pins);
