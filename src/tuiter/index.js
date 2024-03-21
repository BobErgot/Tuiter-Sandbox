import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import postsReducer from "./reducers/post-summary-list-reducer";
import profileReducer from "./profile/profile-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import whoReducer from "./reducers/who-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import EditProfileComponent from "./edit-profile";

const store = configureStore({reducer:
        {
            who: whoReducer,
            posts: postsReducer,
            tuitsData: tuitsReducer,
            profile: profileReducer
        }});

function Tuiter() {
    return (<Provider store={store}>
        <div className="row">
            <div className="col-2 col-lg-1 col-xl-2 py-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6 py-2 border border-light px-0">
                <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="edit-profile" element={<EditProfileComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-lg-block col-lg-4 py-2">
                <WhoToFollowList/>
            </div>
        </div>
    </Provider>);
}

export default Tuiter