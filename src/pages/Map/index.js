import React, { useState, useRef, useEffect } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Icon from '@mdi/react'
import { mdiMapMarkerPlus, mdiFilter, mdiNavigation } from '@mdi/js'
//Map Imports 
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import { formatRelative } from "date-fns";
// import "@reach/combobox/styles.css";
import mapStyles from "./assets/mapStyles";
const libraries = ["places"];



const Map = () => {
    const pins = useSelector(state => state.pins.pins)
    const [markers, setMarkers] = React.useState(pins);

    const mapRef = React.useRef() //To retain state withou re renders for search 
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    // Selected Marker Information 
    const [selected, setSelected] = React.useState(null);

    //On click 
    const onMapClick = React.useCallback((e) => {
        // setMarkers((current) => [
        //     ...current,
        //     {
        //         lat: e.latLng.lat(),
        //         lng: e.latLng.lng(),
        //     },
        // ]);
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(20);
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
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error Loading Maps";
    if (!isLoaded) return "Loading...";

    //Markers on CLick 



    let iconRender = (fillcolour) => {
        return (
            {
                path: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",
                fillColor: fillcolour,
                fillOpacity: 1,
                anchor: new google.maps.Point(12, 24),
                strokeWeight: 0,
                scale: 1.5
            })
    }

    return (
        <>
            <div className="min-w-screen min-h-screen gradscheme flex items-center p-20 overflow-hidden">
                <div id="mapBox" className="flex-1 rounded-3xl bg-white shadow-xl p-20 lg:p-20 flex items-center text-center ">

                    <div className="w-full">
                        <div className=" mb-5 font-light flex flex-wrap justify-around items-center">
                            <NavLink to="/map/addpin" activeClassName="current">

                                <button
                                    className="gradscheme transform transition-all hover:scale-110 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded-md outline-none focus:outline-none sm:mr-2 mb-1 md:pt-3 md:pr-5 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    <Icon path={mdiMapMarkerPlus}
                                        title="Add Pin"
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
                                        title="Filter"
                                        size={1}
                                        className="inline md:mb-1"
                                    /> <span className="hidden md:inline-block"> Filter </span>
                                </button>


                            </NavLink>

                            <button
                                className="gradscheme transform transition-all hover:scale-110 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded-md outline-none focus:outline-none sm:mr-2 mb-1 md:pt-3 md:pr-5 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                    navigator.geolocation.getCurrentPosition(
                                        (position) => {
                                            panTo({
                                                lat: position.coords.latitude,
                                                lng: position.coords.longitude,
                                            });
                                        },
                                        () => null
                                    );
                                }}
                            >
                                <Icon path={mdiNavigation}
                                    title="Recentre"
                                    size={1}
                                    className="inline md:mb-1 md:mr-1"
                                /> <span className="hidden md:inline-block"> Recentre </span>
                            </button>
                        </div>


                        <Search panTo={panTo} />




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
                                        icon={iconRender(marker.colour)}
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

                        <div className="mt-4 ">




                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Map;




function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 51.509865, lng: () => -0.118092 }, //Prefer London - Should Change later to user location 
            radius: 500 * 1000, //500 km Radius of preferneced searches 
        },
    });

    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            console.log(lat, lng)
            panTo({ lat, lng });
            setValue("", false)
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <div className="">
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    className="shadow-sm border rounded-md w-1/2 py-2 px-3 mb-2 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg"
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Search for Pin"
                />
                <ComboboxPopover>
                    <ComboboxList className="bg-white p-5 rounded-xl max-h-96 overflow-auto mx-auto border leading-7 text-center">
                        {status === "OK" &&
                            data.map(({ id, description }) => (
                                <ComboboxOption key={id} value={description} className="cursor-pointer transform transition-all hover:scale-105 hover:text-purple-500" />
                            ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}
