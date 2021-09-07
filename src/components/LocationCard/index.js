import React, { useEffect, useRef } from "react";
import "./style.css";
import { NavLink, useParams } from "react-router-dom";

const ListCard = ({ name, id, iconClass, border }) => {
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

  return (
    <NavLink to='/list'>
      <div className={`rounded-lg border-2 px-5 my-5 ${border}`}>
        <div className='flex flex-row justify-between mt-3 mb-2'>
          <h1>{name}</h1>
          <p className='hidden'>{id}</p>
          <i class={iconClass}></i>
        </div>
      </div>
    </NavLink>
  );
};

export default ListCard;
