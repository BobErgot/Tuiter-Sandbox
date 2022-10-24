import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return (
        <ul className="list-group  wd-follow-container">
            <li className="list-group-item">
                <h5 className="fw-bolder">Who to follow</h5>
            </li>
            {
                whoArray.map(who => <WhoToFollowListItem key={who._id} who={who}/>)
            }
        </ul>
    );
};

export default WhoToFollowList;