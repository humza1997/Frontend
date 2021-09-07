import React, { useState, useRef } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiMapMarkerPlus, mdiFilter } from '@mdi/js'
//Map Imports 
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import { formatRelative } from "date-fns";
// import "@reach/combobox/styles.css";
import mapStyles from "./assets/mapStyles";
const libraries = ["places"];



const Map = () => {
    const [markers, setMarkers] = React.useState([{ "lat": 51.95635707559379, "lng": -0.16841113281249598 }, { "lat": 51.73577710870737, "lng": -0.07502734374999598 }, { "lat": 51.671095625555765, "lng": -0.904495117187496 }, { "lat": 51.301673863301666, "lng": 3.083541992187504 }]);

    const mapRef = React.useRef() //To retain state withou re renders for search 
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);


    // Selected Marker Information 
    const [selected, setSelected] = React.useState(null);

    //On click 
    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            },
        ]);
    }, []);


    //Google Maps Options
    const mapContainerStyle = {
        height: "100%",
        width: "100%",
    };
    const center = {
        lat: 51.505910,
        lng: -0.097000,
    };

    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
    };

    //API 

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "",
        libraries,
    });

    if (loadError) return "Error Loading Maps";
    if (!isLoaded) return "Loading...";

    //Markers on CLick 



    let icon = {
        path: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",
        fillColor: '#FF0000',
        fillOpacity: 1,
        anchor: new google.maps.Point(12, 24),
        strokeWeight: 0,
        scale: 1.5
    }

    return (
        <>
            <div class="min-w-screen min-h-screen gradscheme flex items-center p-20 overflow-hidden">
                <div id="mapBox" class="flex-1 rounded-3xl bg-white shadow-xl p-20 lg:p-20 flex items-center text-center ">

                    <div class="w-full">
                        <div class=" mb-5 font-light flex flex-wrap justify-around items-center">
                            <NavLink to="/map/addpin" activeClassName="current">

                                <button
                                    className="gradscheme transform transition-all hover:scale-110 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded-md outline-none focus:outline-none sm:mr-2 mb-1 md:pt-3 md:pr-5 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    <Icon path={mdiMapMarkerPlus}
                                        title="User Profile"
                                        size={1}
                                        className="inline md:mb-1 md:mr-1"
                                    /> <span className="hidden md:inline-block"> Add Pin </span>
                                </button>


                            </NavLink>


                            <h3 className="text-4xl font-semibold leading-normal text-center">
                                Map <span className="hidden md:inline-block"> it Out! </span>
                            </h3>

                            <NavLink to="/map/filter" activeClassName="current">

                                <button
                                    className="gradscheme transform transition-all hover:scale-110 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded-md outline-none focus:outline-none sm:mr-2 mb-1 md:pt-3 md:pr-5 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    <Icon path={mdiFilter}
                                        title="User Profile"
                                        size={1}
                                        className="inline md:mb-1"
                                    /> <span className="hidden md:inline-block"> Filter </span>
                                </button>


                            </NavLink>
                        </div>

                        <div className="border heightcustom shadow-md focus:outline-none focus-within:border-blue-400 transition-all duration-500 bg-center bg-cover">
                            <GoogleMap
                                id="map"
                                mapContainerStyle={mapContainerStyle}
                                zoom={8}
                                center={center}
                                options={options}
                                onClick={onMapClick}
                                onLoad={onMapLoad}
                            >
                                {markers.map((marker) => (
                                    <Marker
                                        key={`${marker.lat}-${marker.lng}`}
                                        position={{ lat: marker.lat, lng: marker.lng }}
                                        icon={icon}
                                        onClick={() => {
                                            setSelected(marker);
                                        }}

                                    />
                                ))}

                                {selected ? (
                                    <InfoWindow
                                        position={{ lat: selected.lat, lng: selected.lng }}
                                        onCloseClick={() => {
                                            setSelected(null);
                                        }}
                                    >
                                        <div>
                                            <h2>
                                                Big Man, this is your Pin!
                                            </h2>
                                            <p>lat: {selected.lat}</p>
                                            <p>lng: {selected.lng}</p>
                                        </div>
                                    </InfoWindow>
                                ) : null}

                            </GoogleMap>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Map;
