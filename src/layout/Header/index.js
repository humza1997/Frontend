import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'
import { finalAnim } from "./assets/animate.js"
import { logo } from "../../logo.svg"


const Header = () => {
    let toloc = (id) => {
        window.location.hash = id
    }

    let animHeader = useRef(null)



    useEffect(() => {
        finalAnim(animHeader)
    }, [])



    return (
        <header className="animHeader" ref={(el) => (animHeader = el)} >
            <NavLink exact to="/" activeClassName="current" onClick={() => toloc("homesect")}>
                <div class="logo">
                    <svg id='logo' class=" h-14 ml-1 mb-1" viewBox="0 0 512 512" >
                        <path fillRule="evenodd" d="M460.1,172.2L328.6,41.2l-0.1,0.1c-11.7-11.6-30.1-12.1-41.2-1l-5.2,5.2c-13.1-3.5-26.8-5.3-40.9-5.3
	C152.9,40.2,81,112.1,81,200.5c0,118.2,147.8,258.7,154.1,264.7c1.7,1.6,3.9,2.4,6.1,2.4c2.2,0,4.4-0.8,6.1-2.4
	c5.8-5.5,133.4-126.7,151.9-238.6l27.2,27.1c2.9,2.9,7.5,3,10.3,0.2l24.9-25C476.9,213.6,476.2,188.2,460.1,172.2z M318.5,51.6
	l0.1-0.3l106.8,106.4c-9.1,0.7-17.6,4.5-23.9,10.9l-7.1,7.1c-0.4,0.2-0.7,0.4-1,0.7l-69,69.5l-81.7,82.1c-1.4,0.8-3.1,0.9-4.5,0.3
	c-0.7-0.3-1.2-0.6-1.7-1.1c-1-1-1.5-2.3-1.5-3.7l1.7-95.9c0-2.2-1.8-4-4-4l-95.9,2.4c-2.1,0-4.1-1.2-4.9-3.2c-0.8-2-0.3-4.3,1.3-5.8
	l36-36.2L298.2,51.1C303.7,45.7,312.7,46,318.5,51.6z M451.3,218.2L431.5,238l-30.3-30.1c0.1-2.5,0.2-5,0.2-7.4
	c0-3.5-0.1-7-0.3-10.4l10.7-10.8c9.6-9.5,25.5-9.1,35.7,0.8l0.1-0.2l2.6,2.6C460.3,192.6,460.7,208.5,451.3,218.2z"></path>
                    </svg>
                </div> </NavLink>

            <ul class="text-white text-right">
                <NavLink exact to="/" activeClassName="current" >Login</NavLink>
                <NavLink to="/pins" activeClassName="current" >Pins</NavLink>
                <NavLink to="/lists" activeClassName="current" >Lists</NavLink>
                <NavLink to="/map" activeClassName="current" >Map</NavLink>
                <NavLink to="/share" activeClassName="current" >Share</NavLink>
                <NavLink to="/profile" activeClassName="current">Profile</NavLink>
            </ul>

        </header>

    );
}

export default Header;
