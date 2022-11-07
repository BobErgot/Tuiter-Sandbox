import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';

export const currentUser = {
    "userName": "Bobby", "handle": "bob", "avatar": "../../images/profile-image.svg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Hot",
    "time": "1 min",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({name: 'tuits', initialState: tuits, reducers: {
        createTuit(state, action) {
            state.unshift({...action.payload, ...templateTuit, _id: (new Date()).getTime(),})
        }, deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        }, likeTuitToggle(state, action) {
            const tuit = state.find((tuit) => tuit._id === action.payload._id)
            tuit.liked = !tuit.liked;
        }
    }});

export const {createTuit, deleteTuit, likeTuitToggle} = tuitsSlice.actions;
export default tuitsSlice.reducer;