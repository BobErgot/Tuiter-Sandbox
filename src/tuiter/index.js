import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return (
        <iv className="row">
            <div className="col-2 col-lg-1 col-xl-2 py-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6 py-2 border border-light px-0">
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-lg-block col-lg-4 py-2">
                <WhoToFollowList/>
            </div>
        </iv>
    );
}

export default Tuiter