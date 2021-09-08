import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'
import { finalAnim } from "./assets/animate.js"
import { logo } from "../../logo.svg"
import Icon from '@mdi/react'
import { mdiLoginVariant, mdiMapMarker, mdiFormatListBulleted, mdiMapOutline, mdiShareVariant, mdiAccountOutline } from '@mdi/js'

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
                <div className="logo">
                    <svg id='logo' className=" h-10 ml-1 mb-1" viewBox="0 0 512 512" >
                        <path fillRule="evenodd" d="M130.9,194.7c0,69.1,55.9,125.1,125.1,125.1s125.1-55.9,125.1-125.1S325.1,69.7,256,69.7S130.9,125.6,130.9,194.7z    M256,123.3c39.5,0,71.5,32,71.5,71.5s-32,71.5-71.5,71.5s-71.5-32-71.5-71.5S216.5,123.3,256,123.3z M273.9,34.8c74.5,8,134,67.5,142,142h31.4c-7.9-93-81.3-167.4-173.4-176V34.8z M415.9,212.6c-8,74.5-67.5,134-142,142v36.6h-35.7v-36.6c-74.5-8-134-67.5-142-142H64.9   c13.5,145.3,173.4,289.1,180.4,295.4c3.1,2.7,6.8,4.1,10.6,4.1s7.6-1.3,10.6-4c7.1-6.3,167-150.1,180.4-295.4H415.9z M96.1,176.8c8-74.5,67.5-134,142-142v-34c-92.1,8.6-165.6,83-173.4,176H96.1z"></path>
                    </svg>
                </div> </NavLink>

            <ul className="text-white text-right">
                <NavLink exact to="/" activeClassName="current" > <Icon path={mdiLoginVariant}
                    title="Log In"
                    size={1.1}
                    className="inline mb-1 mdiIcon"
                /></NavLink>
                <NavLink to="/pins" activeClassName="current" ><Icon path={mdiMapMarker}
                    title="Pins"
                    size={1.1}
                    className="inline mb-1 mdiIcon"
                /></NavLink>
                <NavLink to="/lists" activeClassName="current" ><Icon path={mdiFormatListBulleted}
                    title="Lists"
                    size={1.1}
                    className="inline mb-1 mdiIcon"
                /></NavLink>
                <NavLink to="/map" activeClassName="current" ><Icon path={mdiMapOutline}
                    title="Map"
                    size={1.1}
                    className="inline mb-1 mdiIcon"
                /></NavLink>
                <NavLink to="/share" activeClassName="current" ><Icon path={mdiShareVariant}
                    title="Share"
                    size={1.1}
                    className="inline mb-1 mdiIcon"
                /></NavLink>
                <NavLink to="/profile" activeClassName="current"><Icon path={mdiAccountOutline}
                    title="Profile"
                    size={1.1}
                    className="inline mb-1 mdiIcon"
                /></NavLink>
            </ul>

        </header>

    );
}

export default Header;
