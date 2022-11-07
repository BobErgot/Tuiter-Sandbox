import React from "react";
import {createSlice} from "@reduxjs/toolkit";

const defaultProfile = {
    firstName: 'Bobby',
    lastName: 'Shi Do',
    handle: 'bob',
    profilePicture: '/images/profile-image.svg',
    bannerPicture: '/images/banner.jpeg',
    bio: 'Computer Science Graduate at Northeastern | Software Engineer ',
    website: 'https://bobbydoshi.com',
    location: 'Boston, MA',
    dateOfBirth: '1999-12-12',
    dateJoined: '2022-09-01',
    followingCount: 340,
    followersCount: 223
};

const profileSlice = createSlice({name: "profile", initialState: defaultProfile, reducers: {
        updateProfile(state, action) {
            console.log(action.payload);
            return state = action.payload;
        }
    }});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;