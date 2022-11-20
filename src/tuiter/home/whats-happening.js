import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuitThunk} from "../../services/tuits-thunks";
import {currentUser} from "../tuits/tuits-reducer";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        if (whatsHappening.trim().length === 0){
            return;
        }
        const newTuit = { tuit: whatsHappening }
        dispatch(createTuitThunk(newTuit));
    }

    return (
        <div className="container border-1 p-3">
            <div className="row">
                <div className="col-2 text-center">
                    <img src={currentUser.avatar} className="wd-user-avatar" alt={currentUser.userName
                                                                             + " profile image"}/>
                </div>
                <div className="col-10 p-2">
                    <textarea value={whatsHappening} placeholder="What's happening?"
                              className="form-control border-0"
                              onChange={(event) => setWhatsHappening(event.target.value)}>
                    </textarea>
                    <div>
                        <button
                            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bolder"
                            onClick={tuitClickHandler}>
                            Tuit
                        </button>
                        <div className="text-secondary fs-5 p-2">
                            <i className="bi bi-card-image me-3"></i>
                            <i className="bi bi-filetype-gif me-3"></i>
                            <i className="bi bi-bar-chart me-3"></i>
                            <i className="bi bi-emoji-smile me-3"></i>
                            <i className="bi bi-geo-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <hr/>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;