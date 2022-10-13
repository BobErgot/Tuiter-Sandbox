const WhoToFollowListItem = (who) => {
    return(`
            <li class="list-group-item py-2">
                <div class="row align-items-center">
                    <div class="col-2 col-xl-auto">
                        <img class="rounded-circle"
                             src="${who.avatarIcon}" alt="${who.userName} logo"/>
                    </div>
                    <div class="col-6 col-xl">
                        <div class="fw-bolder text-nowrap">
                            ${who.userName}
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div class="text-secondary">@${who.handle}</div>
                    </div>
                    <div class="col-4 col-xl-auto">
                        <button class="fw-bolder btn btn-primary rounded-pill px-4">
                            Follow
                        </button>
                    </div>
                </div>
            </li>
 `);
}
export default WhoToFollowListItem;

// Test Code -
// function exploreComponent() {
//     $('#wd-explore').append(`
//         ${WhoToFollowListItem()}
//    `);
// }
// $(exploreComponent);