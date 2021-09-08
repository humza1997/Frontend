import React, { useEffect, useRef } from "react";
import "./style.css";
import { NavLink, useParams } from "react-router-dom";
import { mdiBorderColor } from "@mdi/js";

const ListCard = ({ name, id, iconClass, border }) => {
  return (
    <NavLink to={`/lists/${id}`}>
      <div className='rounded-lg border-2 px-5 my-5' style={{ borderColor: `${border}` }}>
        <div className='flex flex-row justify-between mt-3 mb-2'>
          <h1>{name}</h1>
          <p className='hidden'>{id}</p>
          <i className={iconClass}></i>
        </div>
      </div>
    </NavLink>
  );
};

export default ListCard;
