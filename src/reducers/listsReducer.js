const initState = {
  loading: false,
  result: [
    {
      name: "Italy Trip",
      id: 1,
      thumb: "fas fa-hiking fa-3x",
      colour: "#FF0000",
      list_pins: [1, 2, 7, 3, 4],
      user_id: 1,
    },
    {
      name: "Restaurants",
      id: 2,
      thumb: "fas fa-utensils fa-3x",
      colour: "#FF0000",
      list_pins: [2, 8, 9, 1],
      user_id: 1,
    },
    {
      name: "Greece Trip",
      id: 3,
      thumb: "fas fa-hiking fa-3x",
      colour: "#0000FF",
      list_pins: [3, 4, 5, 6],
      user_id: 1,
    },
    {
      name: "East London Bars",
      id: 4,
      thumb: "fas fa-hiking fa-3x",
      colour: "#FF0000",
      list_pins: [2, 6, 7],
      user_id: 1,
    },
  ],
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_LISTS":
      return { ...state, result: action.payload, error: false };
    case "ADD_USERNAME":
      return { ...state, username: action.payload, error: false };
    case "RESET":
      return {
        ...state,
        id: action.payload[0],
        name: action.payload[1],
        thumb: action.payload[2],
        error: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default listReducer;

// type: "LOAD_LIST",// payload: [{question: "What is my name?", correctAnswer:"Humza", incorrectAnswers:["Shav", "Polina", "Sammie"]}]
// type: "ANSWER_SUBMIT",// payload: "Humza"

// {type: "LOAD_LISTS", payload:[{ name: "London Trip", id: 4,  thumb: "fas fa-hiking fa-3x"}, { name: "Restaurants", id: 5,  thumb: "fas fa-hiking fa-3x"}]}
