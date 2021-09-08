import { mdiBorderColor } from "@mdi/js";

const initState = {
  loading: false,
  pins: [
    {
      pin_id: 1,
      name: "The Wings Are Good Here",
      thumb: "fas fa-utensils fa-3x",
      colour: "#FF0000",
      notes: "Best Wings in London",
      tags: "",
      location: "Ilford",
      lat: "-12.2324000000",
      lng: "-12.2324000000",
      user_id: 1,
    },
    {
      pin_id: 2,
      name: "Mama Mia",
      thumb: "fas fa-utensils fa-3x",
      colour: "#FF0000",
      notes: "Japanese Restaurant",
      tags: "",
      location: "Roma, Italy",
      lat: "-12.2324000000",
      lng: "-12.2324000000",
      tags: "",
      user_id: 1,
    },
    {
      pin_id: 3,
      name: "Mount Visuvious",
      thumb: "fas fa-hiking fa-3x",
      colour: "#FF0000",
      notes: "Hiking Trail",
      tags: "",
      location: "Pompei, Italy",
      lat: "-12.2324000000",
      lng: "-12.2324000000",
      user_id: 1,
    },
    {
      pin_id: 4,
      name: "Mile End Climbing Club",
      thumb: "fas fa-running fa-3x",
      colour: "#FF0000",
      notes: "Indoor climbing center",
      tags: "",
      location: "Mile End London",
      lat: "-12.2324000000",
      lng: "-12.2324000000",
      user_id: 1,
    },
    {
      pin_id: 5,
      name: "The Jazz Cafe",
      thumb: "fas fa-music fa-3x",
      colour: "#FF0000",
      notes: "Great Live music",
      tags: "",
      location: "Camden, London",
      lat: "-12.2324000000",
      lng: "-12.2324000000",
      user_id: 1,
    },
    {
      pin_id: 6,
      name: "Valentines Park",
      thumb: "fas fa-tree fa-3x",
      colour: "#FF0000",
      notes: "Lovely Park",
      tags: "",
      location: "Ilford, London",
      lat: "-12.2324000000",
      lng: "-12.2324000000",
      user_id: 1,
    },
    {
      pin_id: 7,
      name: "The Wings Are Good Here",
      thumb: "fas fa-hiking fa-3x",
      colour: "#FF0000",
      notes: "Hiking Trail",
      tags: "",
      location: "Pompei, Italy",
      lat: "-12.2324000000",
      lng: "-12.2324000000",
      user_id: 1,
    },
    {
      pin_id: 8,
      name: "Mount Fisuvious",
      thumb: "fas fa-hiking fa-3x",
      colour: "#FF0000",
      notes: "Hiking Trail",
      tags: "",
      location: "Pompei, Italy",
      lat: "-12.2324000000",
      lng: "-12.2324000000",
      user_id: 1,
    },
    {
      pin_id: 9,
      name: "Mount Bisuvious",
      thumb: "fas fa-hiking fa-3x",
      colour: "#FF0000",
      notes: "Hiking Trail",
      tags: "",
      location: "Pompei, Italy",
      lat: "-12.2324000000",
      lng: "-12.2324000000",
      user_id: 1,
    },
    {
      pin_id: 10,
      name: "Mount Hisuvious",
      thumb: "fas fa-hiking fa-3x",
      colour: "#FF0000",
      notes: "Hiking Trail",
      tags: "",
      location: "Pompei, Italy",
      lat: "-12.2324000000",
      lng: "-12.2324000000",
      user_id: 1,
    },
  ],
};

const pinsReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_PINS":
      return { ...state, pins: action.payload, error: false };
    case "ADD_USERNAME":
      return { ...state, username: action.payload, error: false };
    case "RESET":
      return {
        ...state,
        pin_id: action.payload[0],
        name: action.payload[1],
        location: action.payload[2],
        notes: action.payload[3],
        error: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default pinsReducer;

// type: "LOAD_LIST",// payload: [{question: "What is my name?", correctAnswer:"Humza", incorrectAnswers:["Shav", "Polina", "Sammie"]}]
// type: "ANSWER_SUBMIT",// payload: "Humza"

// {type: "LOAD_LISTS", payload:[{ name: "London Trip", pin_id: 4,  thumb: "fas fa-hiking fa-3x"}, { name: "Restaurants", pin_id: 5,  thumb: "fas fa-hiking fa-3x"}]}
