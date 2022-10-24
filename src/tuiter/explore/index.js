import React from "react";
import PostSummaryList from "../post-summary-list";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css'
import '../css/style.css';

const ExploreComponent = () => {
    return(
        <>
            <div className="row align-items-center px-4">
                <div className="col-10">
                    <div className="position-relative">
                        <span className="position-absolute wd-padding-12-6 text-secondary">
                            <i className="bi bi-search"></i>
                        </span>
                        <label className="w-100">
                            <input type="text" className="ps-5 form-control rounded-pill wd-search"
                                   placeholder="Search Tuiter"></input>
                        </label>
                    </div>
                </div>
                <div className="col-2 text-end">
                    <a className="text-white-50" href="explore-settings.html">
                        <i className="bi bi-gear-fill"></i>
                    </a>
                </div>
            </div>
            <ul className="nav mt-2 justify-content-between border-bottom border-light">
                <li className="nav-item wd-topic-tab text-bg-primary rounded-top">
                    <a className="nav-link active px-0 mx-3 text-white" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="news.html">News</a>
                </li>
                <li className="nav-item d-none d-sm-inline">
                    <a className="nav-link text-white" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-inline">
                    <a className="nav-link text-white" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div className="position-relative">
                <img className="mt-2" src="/images/Starship-Mk1-Day.png" width="100%"
                     alt="SpaceX's Starship image"/>
                <div className="position-absolute bottom-0 left-0 text-white ps-3 border-bottom border-light">
                    <h4 className="fw-bolder">
                        SpaceX's Starship
                    </h4>
                </div>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;