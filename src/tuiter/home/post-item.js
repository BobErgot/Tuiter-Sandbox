import React from "react";

const PostItem = (
    {
        post =   {
            "avatar": "../../images/elon_spacex_avatar.jpg",
            "userName": "Elon Musk",
            "handle":"elonmusk",
            "time": "23h",
            "verified": true,
            "post":"Amazing show about @Inspiration4x mission!",
            "image":"../../images/elon_countdown_post.jpg",
            "title":"Countdown:Inspiration4 Mission to Space | Netflix Official Site",
            "desc":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "link":"",
            "comments":"4.2k",
            "retweets":"3.5k",
            "hearts":"37.5k"
        }
    }
) => {
    return(
        <li className="list-group-item border-bottom border-light">
            <div className="container border-1 p-3">
                <div className="row">
                    <div className="col-1 p-0">
                        <img alt="${post.userName} profile image" className="wd-avatar"
                             src={`/images/${post.avatar}`}/>
                    </div>
                    <div className="col">
                        <div className="container">
                            <span className="fw-bolder text-white">{post.userName}</span>
                            <i className={`bi bi-check-circle-fill m-1 ${post.verified ? '' : 'd-none'}`}></i>
                            <span className="text-secondary"> @{post.handle}</span>
                            <span className="text-secondary">· {post.time}</span>
                            <i className="bi bi-three-dots float-end text-secondary"></i>
                        </div>
                        <div className={`container text-white ${post.post ? '' : 'd-none'}`}>
                            <p>{post.post}</p>
                        </div>
                        <div className="container wd-post-summary rounded-3 p-0">
                            <img alt="${post.userName} post image"
                                 className="wd-post-images rounded-top" src={`/images/${post.image}`}/>
                            <p className={`fw-semibold mt-2 p-2 text-white ${post.title ? '' : 'd-none'}`}>{post.title}</p>
                            <p className={`ps-2 pe-2  text-secondary ${post.desc ? '' : 'd-none'}`}>{post.desc}</p>
                            <p className={`ps-2 pe-2 ${post.link ? '' : 'd-none'}`}><a
                                className="text-decoration-none text-white" target="_blank"
                                href={post.link}><i className="bi bi-link-45deg"></i>{post.link}
                            </a></p>
                        </div>
                        <div className="continer p-3 text-secondary">
                            <div className="row">
                                <div className="col">
                                    <i className="bi bi-chat-dots-fill"></i><span
                                    className="ps-2">{post.comments}</span>
                                </div>
                                <div className="col">
                                    <i className="bi bi-arrow-left-right"></i><span
                                    className="ps-2">{post.retweets}</span>
                                </div>
                                <div className="col">
                                    <i className="bi bi-heart-fill"></i><span
                                    className="ps-2">{post.hearts}</span>
                                </div>
                                <div className="col">
                                    <i className="bi bi-upload"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;

