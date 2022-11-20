import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [])
    return (
        <>
            <ul className="list-group  wd-list">
                {
                    loading &&
                    <li className="list-group-item border-bottom border-light">
                        Loading...
                    </li>
                }
                {tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)}
            </ul>
        </>);
};
export default TuitsList;