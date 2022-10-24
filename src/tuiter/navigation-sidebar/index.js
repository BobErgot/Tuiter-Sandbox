import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <>
            <div className="list-group bg-dark">
                <a href="/" className="list-group-item list-group-item-action">
                    <i className="bi bi-airplane-fill"></i>
                </a>
                <a href="../homescreen/"
                   className={`list-group-item list-group-item-action py-2 ${active === 'home'?'active':''}`}>
                    <i className="bi bi-house-fill wd-sidebar-icon"></i>
                    <span className="d-none d-xl-inline fw-light">Home</span>
                </a>
                <a href="../explorescreen/"
                   className={`list-group-item list-group-item-action py-2 ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-hash wd-sidebar-icon"></i>
                    <span className="d-none d-xl-inline">Explore</span>
                </a>
                <a href="#"
                   className="list-group-item list-group-item-action py-2 ${active==='notifications'?'active':''}">
                    <i className="bi bi-bell-fill wd-sidebar-icon"></i>
                    <span className="d-none d-xl-inline fw-light">Notifications</span>
                </a>
                <a href="#"
                   className="list-group-item list-group-item-action py-2 ${active==='messages'?'active':''}">
                    <i className="bi bi-envelope-fill wd-sidebar-icon"></i>
                    <span className="d-none d-xl-inline fw-light">Messages</span>
                </a>
                <a href="#"
                   className="list-group-item list-group-item-action py-2 ${active==='bookmarks'?'active':''}">
                    <i className="bi bi-bookmark-fill wd-sidebar-icon"></i>
                    <span className="d-none d-xl-inline fw-light">Bookmarks</span>
                </a>
                <a href="#"
                   className="list-group-item list-group-item-action py-2 ${active==='lists'?'active':''}">
                    <i className="bi bi-list wd-sidebar-icon"></i>
                    <span className="d-none d-xl-inline fw-light">Lists</span>
                </a>
                <a href="#"
                   className="list-group-item list-group-item-action py-2 ${active==='profile'?'active':''}">
                    <i className="bi bi-person-fill wd-sidebar-icon"></i>
                    <span className="d-none d-xl-inline fw-light">Profile</span>
                </a>
                <a href="#"
                   className="list-group-item list-group-item-action py-2 ${active==='profile'?'active':''}">
                    <i className="bi bi-three-dots wd-sidebar-icon"></i>
                    <span className="d-none d-xl-inline fw-light">More</span>
                </a>
            </div>
            <button className="btn btn-primary w-100 mt-3 mb-3 rounded-pill wd-bg-blue">
                Tuit
            </button>
        </>
    );
};

export default NavigationSidebar;