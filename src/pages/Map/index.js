import React, { useState, useRef, useEffect } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../layout';
import { setForm, setRecent } from '../../actions';
import Icon from '@mdi/react'
import { mdiMapMarkerPlus, mdiFilter, mdiLeadPencil, mdiNavigation } from '@mdi/js'
//Map Imports 
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import { formatRelative } from "date-fns";
// import "@reach/combobox/styles.css";
import mapStyles from "./assets/mapStyles";
import { useHistory } from "react-router-dom";

const libraries = ["places"];

const Map = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const pins = useSelector(state => state.pins.pins)
    const form = useSelector(state => state.form.form)
    const recent = useSelector(state => state.form.recent)
    const [markers, setMarkers] = React.useState(pins);
    useEffect(() => {
        setMarkers(pins)
    }, [pins]);




    let fetchState = () => {
        const pins = useSelector(state => state.pins.pins)
        console.log(pins)
    }

    const mapRef = React.useRef() //To retain state withou re renders for search 
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const handleModalClose = () => {
        history.push('/map')
    }

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
    const center = recent;

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
                path: "M7.11,9.59A4.89,4.89,0,1,0,12,4.71,4.88,4.88,0,0,0,7.11,9.59ZM12,6.8A2.79,2.79,0,1,1,9.21,9.59,2.79,2.79,0,0,1,12,6.8Z M12.7,3.34a6.29,6.29,0,0,1,5.55,5.55h1.22A7.55,7.55,0,0,0,12.7,2Z M18.25,10.29a6.27,6.27,0,0,1-5.55,5.54v1.43H11.3V15.83a6.25,6.25,0,0,1-5.54-5.54H4.54c.52,5.67,6.77,11.29,7,11.53A.63.63,0,0,0,12,22a.66.66,0,0,0,.41-.16c.28-.25,6.52-5.86,7.05-11.54Z M5.75,8.89A6.29,6.29,0,0,1,11.3,3.34V2A7.54,7.54,0,0,0,4.53,8.89Z",
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
                                    onClick={() => handleModalClose()}
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
                                    onClick={fetchState}
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
                                        position={{


                                            lat: parseFloat(marker.lat),
                                            lng: parseFloat(marker.lng)



                                        }}
                                        icon={iconRender(marker.colour)}
                                        onClick={() => {
                                            setSelected(marker);
                                        }}

                                    />
                                ))}

                                {selected ? (
                                    <InfoWindow
                                        position={{ lat: parseFloat(selected.lat), lng: parseFloat(selected.lng) }}
                                        onCloseClick={() => {
                                            setSelected(null);
                                        }}
                                    >
                                        <div className="w-64">
                                            <h1 className="text-lg" style={{ color: selected.colour }}>
                                                {selected.name}
                                            </h1>
                                            <button className=" rounded-xl mx-auto my-2 w-auto px-3 py-0.5 text-white" style={{ backgroundColor: selected.colour }}>{selected.tag}</button>
                                            <div className="border rounded-md p-1 px-2 text-left w-full flex flex-row" style={{
                                                borderColor: selected.colour,
                                                color: selected.colour
                                            }}>
                                                <div className="my-auto py-auto">
                                                    <Icon path={mdiLeadPencil}
                                                        title="Add Pin"
                                                        size={1}
                                                        className=" mr-1 m-auto"
                                                        color={selected.colour}
                                                    /></div> <p className="my-auto">{selected.notes}</p>
                                            </div>

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
            <Modal updateOpen={handleModalClose} name={form.name} lat={form.lat} lng={form.lng} />

        </>
    )
}

export default Map;




function Search({ panTo }) {
    const dispatch = useDispatch();
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
        let form = {}
        form.name = address
        setValue(address, false);
        clearSuggestions();
        try {
            const results = await getGeocode({ address });
            console.log(results);
            const { lat, lng } = await getLatLng(results[0]);
            form.lat = lat
            form.lng = lng
            dispatch(setForm(form))
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