import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { ListCard, AddButton } from "../../components";
import { useSelector, connect } from "react-redux";

const ListIndex = () => {
  const [list, setlist] = useState([]);

  const listIndex = useSelector((state) => state.list);
  console.log(listIndex);

  const renderLists = () =>
    listIndex.result.map((x) => <ListCard key={x.id} id={x.id} name={x.name} iconClass={x.thumb} border={x.colour} />);
  return (
    <div className='relative'>
      <div className='absolute gradscheme inset-0 z-0'></div>
      <div className='min-h-screen sm:flex sm:flex-row mx-0 justify-center'>
        <div className='flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10'>
          <div className='hidden lg:flex flex-col  text-white'></div>
        </div>
        <div className='flex justify-center self-center z-10'>
          <div className='p-12 bg-white mx-auto rounded-3xl w-full '>
            <div className='mb-4'>
              <h3 className='text-center font-semibold text-2xl text-gray-800'>Lists</h3>
              <p className='text-center text-gray-500 mt-3'>Please sign in to use PinPlace</p>
              {renderLists()}
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

export default ListIndex;
