import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
                <ul class="list-group wd-follow-container">
                    <li class="list-group-item">
                        <h5 class="fw-bolder">Who to follow</h5>
                    </li>
                    ${who.map(whose => {return (WhoToFollowListItem(whose));}).join('')}
                </ul>
            `);
}

export default WhoToFollowList;

//Test Code -
// function exploreComponent() {
//     $('#wd-explore').append(`
//         ${WhoToFollowList()}
//    `);
// }
// $(exploreComponent);