const PostItem = (post) => {
    return(`
            <li class="list-group-item border-bottom border-light">
                <div class="container border-1 p-3">
                    <div class="row">
                        <div class="col-1 p-0">
                            <img alt="${post.userName} profile image" class="wd-avatar" 
                            src="${post.avatar}"/>
                        </div>
                        <div class="col">
                            <div class="container">
                                <span class="fw-bolder text-white">${post.userName}</span> 
                                <i class="fas fa-check-circle ${post.verified ? '' : 'd-none'}"></i>
                                <span class="text-secondary"> @${post.handle}</span>
                                <span class="text-secondary">· ${post.time}</span>
                                 <i class="fa-solid fa-ellipsis float-end text-secondary"></i>
                             </div>
                             <div class="container text-white ${post.post ? '' : 'd-none'}">
                                <p>${post.post}</p>
                             </div>
                            <div class="container wd-post-summary rounded-3 p-0">
                                <img alt="${post.userName} post image" 
                                class="wd-post-images rounded-top" src="${post.image}"/>
                                <p class="fw-semibold mt-2 p-2 text-white ${post.title ? '' : 'd-none'}">${post.title}</p>
                                <p class="ps-2 pe-2  text-secondary ${post.desc ? '' : 'd-none'}">${post.desc}</p>
                                <p class="ps-2 pe-2 ${post.link ? '' : 'd-none'}"><a class="text-decoration-none text-white" 
                                href="${post.link}"><i class="fa-solid fa-link"></i>${post.link}</a></p>
                            </div>
                            <div class="continer p-3 text-secondary">
                                <div class="row">
                                    <div class="col">
                                        <i class="fa-solid fa-comment"></i><span class="ps-2">${post.comments}</span>
                                    </div>
                                    <div class="col">
                                        <i class="fa-solid fa-retweet"></i><span class="ps-2">${post.retweets}</span>
                                    </div>
                                    <div class="col">
                                        <i class="fa-solid fa-heart"></i><span class="ps-2">${post.hearts}</span>
                                    </div>
                                    <div class="col">
                                        <i class="fa-solid fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
           </li>
 `);
}
export default PostItem;

// Test Code -
// function exploreComponent() {
//     $('#wd-home').append(`
//         ${PostItem()}
//    `);
// }
// $(exploreComponent);