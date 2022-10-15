import PostItem from "./PostItem.js";
import posts from "./posts.js"

const PostList = () => {
    return (`
             <ul class="list-group wd-list">
                ${posts.map(post => {return (PostItem(post));}).join('')}
            </ul>
            `);
}

export default PostList;

//Test Code -
// function exploreComponent() {
//     $('#wd-home').append(`
//         ${PostList()}
//    `);
// }
// $(exploreComponent);