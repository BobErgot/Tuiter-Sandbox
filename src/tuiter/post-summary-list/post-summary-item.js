import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "../../images/tesla_logo.png"
        }
    }
) => {
    return(
        <li className="list-group-item border-bottom border-light">
            <div className="row">
                <div className="col">
                    <p className={`text-secondary m-0 p-0 ${post.topic ? '' : 'd-none'}`}>{post.topic}</p>
                    <div className={`${post.userName ? '' : 'd-none'}`}>
                        <span className="fw-bolder">{post.userName}</span>
                        <i className="bi bi-check-circle-fill m-1"></i>
                        <span
                            className={`text-secondary ${post.time ? '' : 'd-none'}`}> - {post.time}</span>
                    </div>
                    <p className={`fw-bolder m-0 p-0 ${post.title ? '' : 'd-none'}`}>
                        {post.title}
                    </p>
                    <p className={`text-secondary m-0 p-0 ${post.tweets ? '' : 'd-none'}`}>{post.tweets} Tuits</p>
                </div>
                <div className="col-auto">
                    <img className="rounded-4 wd-list-img" src={`/images/${post.image}`}
                         alt="{post.userName} logo"></img>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;

