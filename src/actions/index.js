import axios from 'axios';

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
