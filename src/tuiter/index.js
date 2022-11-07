import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import postsReducer from "./reducers/post-summary-list-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";

const store = configureStore({reducer: {
                                     who: whoReducer, posts: postsReducer, tuits: tuitsReducer
                                 }});

function Tuiter() {
    return (<Provider store={store}>
        <iv className="row">
            <div className="col-2 col-lg-1 col-xl-2 py-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6 py-2 border border-light px-0">
                <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-lg-block col-lg-4 py-2">
                <WhoToFollowList/>
            </div>
        </iv>
    </Provider>);
}

export default Tuiter