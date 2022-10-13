import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
    return (`
             <ul class="list-group wd-list">
                ${posts.map(post => {return (PostSummaryItem(post));}).join('')}
            </ul>
            `);
}

export default PostSummaryList;

//Test Code -
// function exploreComponent() {
//     $('#wd-explore').append(`
//         ${PostSummaryList()}
//    `);
// }
// $(exploreComponent);