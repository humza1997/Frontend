const initState = {
  loading: false,
  result: [{ name: "Italy Trip", id: 3, icon: "fas fa-hiking fa-3x" }],
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
        icon: action.payload[2],
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

// {type: "LOAD_LISTS", payload:[{ name: "London Trip", id: 4,  icon: "fas fa-hiking fa-3x"}, { name: "Restaurants", id: 5,  icon: "fas fa-hiking fa-3x"}]}
