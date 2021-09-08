import React, { useEffect, useRef } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";

const LocationCard = ({ name, id, iconClass, border }) => {
  return (
    <Link to={`/pins/${id}`}>
      <div className='rounded-lg border-2 px-5 my-5' style={{ borderColor: `${border}` }}>
        <div className='flex flex-row justify-between mt-3 mb-2'>
          <h1>{name}</h1>
          <p className='hidden'>{id}</p>
          <i className={iconClass}></i>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;
