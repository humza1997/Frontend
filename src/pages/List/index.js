import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { LocationCard, AddButton } from "../../components";

const List = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.messageShav.value,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    };

    fetch("/api/*", options)
      .then((r) => r.json())
      .then(() => e.target.reset())
      .catch(console.warn);
  };

  const [list, setlist] = useState([
    { id: 1, name: "Padella", icon: "fas fa-utensils fa-3x", border: "border-red-500" },
    { id: 2, name: "Mama Mia", icon: "fas fa-utensils fa-3x", border: "border-red-500" },
    { id: 3, name: "Mount Visuvious", icon: "fas fa-hiking fa-3x", border: "border-blue-500" },
  ]);

  const renderLocation = () =>
    list.map((x) => <LocationCard key={x.id} id={x.id} name={x.name} iconClass={x.icon} border={x.border} />);
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
              <h3 class='text-center font-semibold text-2xl text-gray-800'>Lists</h3>

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

export default List;
