import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
    return (
        <ul className="list-group  wd-follow-container">
            <li className="list-group-item">
                <h5 className="fw-bolder">Who to follow</h5>
            </li>
            {
                whoArray.map(who => <WhoToFollowListItem key={who.handle} who={who}/>)
            }
        </ul>
    );
};

export default WhoToFollowList;