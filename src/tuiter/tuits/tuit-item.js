import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {

    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item border-bottom border-light">
            <div className="container border-1 p-3">
                <div className="row">
                    <div className="col-1 p-0">
                        <img alt={tuit.userName + " profile image"} className="wd-avatar"
                             src={`/images/${tuit.avatar}`}/>
                    </div>
                    <div className="col">
                        <div className="container">
                            <span className="fw-bolder text-white">{tuit.userName}</span>
                            <i className={`bi bi-check-circle-fill m-1 ${tuit.verified ? '' : 'd-none'}`}></i>
                            <span className="text-secondary"> @{tuit.handle}</span>
                            <span className="text-secondary"> · {tuit.time}</span>
                            <i className="bi bi-x-lg float-end text-secondary"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </div>
                        <div className={`container text-white ${tuit.tuit ? '' : 'd-none'}`}>
                            <p>{tuit.tuit}</p>
                        </div>
                        <TuitStats key={tuit._id}
                                   replies={tuit.replies}
                                   retuits={tuit.retuits}
                                   likes={tuit.likes}
                                   liked={tuit.liked}
                                   disliked={tuit.disliked}
                                   tuit={tuit}
                        />
                    </div>
                </div>
            </div>
        </li>
    );


};
export default TuitItem;