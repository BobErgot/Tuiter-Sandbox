const PostSummaryItem = (post) => {
    return(`
            <li class="list-group-item border-bottom border-light">
                <div class="row">
                    <div class="col">
                        <p class="text-secondary m-0 p-0 ${post.topic ? '' : 'd-none'}">${post.topic}</p>
                        <div ${post.userName ? '' : 'class="d-none"'}>
                            <span class="fw-bolder">${post.userName}</span>
                            <i class="fa-solid fa-circle-check"></i>
                            <span class="text-secondary ${post.time ? '' : 'd-none'}"> - ${post.time}</span>
                        </div>
                        <p class="fw-bolder m-0 p-0 ${post.title ? '' : 'd-none'}">
                            ${post.title}
                        </p>
                        <p class="text-secondary m-0 p-0  ${post.tweets ? '' : 'd-none'}">${post.tweets} Tuits</p>
                    </div>
                    <div class="col-auto">
                        <img class="rounded-4 wd-list-img" src="${post.image}" alt="${post.userName} logo">
                    </div>
                </div>
            </li>
 `);
}
export default PostSummaryItem;

// Test Code -
// function exploreComponent() {
//     $('#wd-explore').append(`
//         ${PostSummaryItem()}
//    `);
// }
// $(exploreComponent);