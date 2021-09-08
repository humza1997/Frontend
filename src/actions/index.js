import axios from 'axios';
export const addList = (list) => ({
  type: "ADD_LIST",
  payload: list,
});

export const addUsername = (username) => ({
  type: "ADD_USERNAME",
  payload: username,
});

export const addPin = (pin) => ({
  type: "ADD_PIN",
  payload: pin,
});

export const setForm = (form) => ({
  type: "SET_FORM",
  payload: form,
});

export const setRecent = (recent) => ({
  type: "SET_RECENT",
  payload: recent,
});


export const resetState = () => ({
  type: "RESET",
  payload: [0, " ", 0],
});

// export const loadList = (id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`localhost:8080/lists/${id}`);

//       dispatch({
//         type: "LOAD_LIST",
//         payload: data,
//       });
//     } catch (err) {
//       console.warn(err.message);
//       dispatch({
//         type: "SET_ERROR",
//         payload: err.message,
//       });
//     }
//   };

// };

//Helper Shuffle function:
export const shuffle = (arr) => {
  let c = arr.length;
  let rand;
  while (c !== 0) {
    rand = Math.floor(Math.random() * c);
    c--;
    [arr[c], arr[rand]] = [arr[rand], arr[c]];
  }
  return arr;
};

