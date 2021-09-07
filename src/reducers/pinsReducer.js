const initState = {
  loading: false,
  pins: [{
    "pin_id": 1,
    "name": "Ayllu sushi",
    "lat": 51.5192168,
    "lng": -0.1792079,
    "notes": "By the canal, but maybe overpriced?",
    "tag": "Food",
    "colour": "#ff006e",
    "user_id": 1
  },
  {
    "pin_id": 2,
    "name": "Eataly London",
    "lat": 51.5187586,
    "lng": -0.0801718,
    "notes": "Bishopsgate - Great pasta",
    "tag": "Food",
    "colour": "#ff006e",
    "user_id": 1
  },
  {
    "pin_id": 3,
    "name": "Din tai fung",
    "lat": 51.5112062,
    "lng": -0.1232363,
    "notes": "Dumplings in Covent Garden. Xiao long bao is a must apparently",
    "tag": "Food",
    "colour": "#ff006e",
    "user_id": 1
  },
  {
    "pin_id": 4,
    "name": "Four quarters",
    "lat": 51.4680715,
    "lng": -0.0668971,
    "notes": "Drinks and games arcade",
    "tag": "Day out",
    "colour": "#9B5DE5",
    "user_id": 1
  },
  {
    "pin_id": 5,
    "name": "Jurema terrace at the mandrake",
    "lat": 51.5175693,
    "lng": -0.1354587,
    "notes": "Rly nice decor, South American food. Bit expensive",
    "tag": "Food",
    "colour": "#ff006e",
    "user_id": 1
  },
  {
    "pin_id": 6,
    "name": "Pastaio",
    "lat": 51.5063932,
    "lng": -0.2199869,
    "notes": "Unlimited pasta for £25",
    "tag": "Food",
    "colour": "#ff006e",
    "user_id": 1
  },
  {
    "pin_id": 7,
    "name": "Snæfellsjökull National Park",
    "lat": 64.8057023,
    "lng": -23.7730966,
    "notes": "stay in Hellnar when visiting",
    "tag": "Hiking",
    "colour": "#fb5607",
    "user_id": 1
  },
  {
    "pin_id": 8,
    "name": "Kirkjufell Mountain",
    "lat": 64.9463023,
    "lng": -23.4418635,
    "notes": "Absolutely beautiful, chance to see northern lights even ",
    "tag": "Hiking",
    "colour": "#fb5607",
    "user_id": 1
  },
  {
    "pin_id": 9,
    "name": "Canary Wharf roof garden",
    "lat": 51.5062878,
    "lng": -0.0192925,
    "notes": "Mini golf here too. Uber boats here and Emirate cable cars",
    "tag": "Day out",
    "colour": "#9B5DE5",
    "user_id": 1
  },
  {
    "pin_id": 10,
    "name": "Madison roofbar",
    "lat": 51.513618,
    "lng": -0.09541,
    "notes": "Nice to go at Sunset",
    "tag": "Day out",
    "colour": "#9B5DE5",
    "user_id": 1
  },
  {
    "pin_id": 11,
    "name": "Bigbury-on-Sea",
    "lat": 50.2839148,
    "lng": -3.8942963,
    "notes": "Go at High Tide. Ride the worlds only sea tractor. Only £2",
    "tag": "Day out",
    "colour": "#9B5DE5",
    "user_id": 1
  },
  {
    "pin_id": 12,
    "name": "Brecon Beacons",
    "lat": 51.9201989,
    "lng": -3.464187,
    "notes": "to Hike",
    "tag": "Hiking",
    "colour": "#fb5607",
    "user_id": 1
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

export default pinsReducer;

// type: "LOAD_LIST",// payload: [{question: "What is my name?", correctAnswer:"Humza", incorrectAnswers:["Shav", "Polina", "Sammie"]}]
// type: "ANSWER_SUBMIT",// payload: "Humza"

// {type: "LOAD_LISTS", payload:[{ name: "London Trip", id: 4,  icon: "fas fa-hiking fa-3x"}, { name: "Restaurants", id: 5,  icon: "fas fa-hiking fa-3x"}]}
