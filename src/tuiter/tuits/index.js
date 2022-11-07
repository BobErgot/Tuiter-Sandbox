import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits);
    return (
        <ul className="list-group  wd-list">
            {tuitsArray.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)}
        </ul>
    );
};
export default TuitsList;