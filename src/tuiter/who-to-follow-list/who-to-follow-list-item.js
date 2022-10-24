import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: '../../images/nasa_logo.jpg' }
    }
) => {
    return(
        <li className="list-group-item py-2">
            <div className="row align-items-center">
                <div className="col-2 col-xl-auto">
                    <img className="rounded-circle" src={`/images/${who.avatarIcon}`} alt={who.userName}/>
                </div>
                <div className="col-6 col-xl">
                    <div className="fw-bolder text-nowrap">
                        {who.userName}
                        <i className="bi bi-check-circle-fill m-1"></i>
                    </div>
                    <div className="text-secondary">@{who.handle}</div>
                </div>
                <div className="col-4 col-xl-auto">
                    <button className="fw-bolder btn btn-primary rounded-pill px-4">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;

