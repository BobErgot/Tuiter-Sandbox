import React from "react";
import {useDispatch} from "react-redux";
import {likeTuitToggle} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({ replies, retuits, likes, liked, disliked, tuit}) => {
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
                    ${liked ? 'text-danger' : ''}`}
                       onClick={() => {dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))}}>
                        <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                        <span className="ps-2">{tuit.likes}</span>
                    </a>
                </div>
                <div className="col">
                    <a className={`text-decoration-none text-secondary
                    ${disliked ? 'text-danger' : ''}`}
                       onClick={() => {dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))}}>
                        <i className={`bi ${disliked ? 'bi-hand-thumbs-down-fill' : 'bi-hand-thumbs-down'}`}></i>
                        <span className="ps-2">{tuit.dislikes}</span>
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