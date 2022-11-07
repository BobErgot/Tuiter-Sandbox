import React from "react";
import {useDispatch} from "react-redux";
import {likeTuitToggle} from "./tuits-reducer";

const TuitStats = ({ replies, retuits, likes, liked, tuit}) => {
    const dispatch = useDispatch();
    const toggleLike = (tuit) => {
        dispatch(likeTuitToggle(tuit))
    }
    return (
        <div className="continer p-3 text-secondary">
            <div className="row">
                <div className="col">
                    <i className="bi bi-chat-dots-fill"></i><span
                    className="ps-2">{replies}</span>
                </div>
                <div className="col">
                    <i className="bi bi-arrow-left-right"></i><span
                    className="ps-2">{retuits}</span>
                </div>
                <div className="col">
                    <a className={`text-decoration-none text-secondary
                    ${liked ? 'text-danger' : ''}`} href="#" onClick={() => toggleLike(tuit)}>
                        <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                        <span className="ps-2">{likes}</span>
                    </a>
                </div>
                <div className="col">
                    <i className="bi bi-upload"></i>
                </div>
            </div>
        </div>
    );
};
export default TuitStats;