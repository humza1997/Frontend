import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { withRouter } from "react-router-dom";
import { LocationCard, AddButton } from "../../components";
import { useSelector, connect } from "react-redux";
import { ListIndex } from "..";

const List = (props) => {
  let name = props.match.params.id;

  const listIndex = useSelector((state) => state.list);
  // console.log(listIndex.result);
  // console.log(listIndex.result[name - 1]);

  let list1 = listIndex.result[name - 1].list_pins;
  let listTitle = listIndex.result[name - 1].name;

  // console.log(list1);

  const pins = useSelector((state) => state.pins);

  console.log(pins.pins);

  let pinsList = list1.map((p) => pins.pins.filter((pin) => pin.pin_id === p));

  console.log(pinsList);

  const renderLocation = () =>
    pinsList.map((x) => (
      <LocationCard key={x[0].id} id={x[0].pin_id} name={x[0].name} iconClass={x[0].thumb} border={x[0].colour} />
    ));

  return (
    <div className='relative'>
      <div className='absolute gradscheme inset-0 z-0'></div>
      <div className='min-h-screen sm:flex sm:flex-row mx-0 justify-center'>
        <div className='flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10'>
          <div className='hidden lg:flex flex-col  text-white'></div>
        </div>
        <div class='flex justify-center self-center z-10'>
          <div class='p-12 bg-white mx-auto rounded-3xl w-full '>
            <div class='mb-4'>
              <h3 class='text-center font-semibold text-2xl text-gray-800'>{listTitle}</h3>

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

export default withRouter(List);
