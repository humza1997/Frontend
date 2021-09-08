const initState = {
  loading: false,
  form: {
    "name": "",
    "lat": 0,
    "lng": 0
  },
  recent: {
    lat: 52.075004,
    lng: -1.650028,
  }
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_FORM":
      return { ...state, form: action.payload, error: false };
    case "SET_RECENT":
      return { ...state, recent: action.payload, error: false };
    case "RESET":
      return {
        ...state,
        id: action.payload[0],
        name: action.payload[1],
        location: action.payload[2],
        tags: action.payload[3],
        error: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default formReducer;

// type: "LOAD_LIST",// payload: [{question: "What is my name?", correctAnswer:"Humza", incorrectAnswers:["Shav", "Polina", "Sammie"]}]
// type: "ANSWER_SUBMIT",// payload: "Humza"

// {type: "LOAD_LISTS", payload:[{ name: "London Trip", id: 4,  icon: "fas fa-hiking fa-3x"}, { name: "Restaurants", id: 5,  icon: "fas fa-hiking fa-3x"}]}

// {type: "SET_FORM", payload:{
//     "name": "HOME MY GUY",
//     "lat": 451.55602469999999,
//     "lng": -70.2796177
//   }}
