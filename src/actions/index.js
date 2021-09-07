import axios from "axios";

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

export const addList = (list) => ({
  type: "ADD_LIST",
  payload: list,
});

export const addUsername = (username) => ({
  type: "ADD_USERNAME",
  payload: username,
});

export const resetState = () => ({
  type: "RESET",
  payload: [0, " ", 0],
});
