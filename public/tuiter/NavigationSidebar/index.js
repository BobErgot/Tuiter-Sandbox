const NavigationSidebar = (active) => {
    return(`
                <div class="list-group bg-dark">
                    <a href="/" class="list-group-item list-group-item-action">
                        <i class="fa-solid fa-kiwi-bird"></i>
                    </a>
                    <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action py-2 ${active==='home'?'active':''}">
                        <i class="fa-solid fa-house wd-sidebar-icon"></i>
                        <span class="d-none d-xl-inline fw-light">Home</span>
                    </a>
                    <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action py-2 ${active==='explore'?'active':''}">
                        <i class="fas fa-hashtag wd-sidebar-icon"></i>
                        <span class="d-none d-xl-inline">Explore</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-2 ${active==='notifications'?'active':''}">
                        <i class="fa-regular fa-bell wd-sidebar-icon"></i>
                        <span class="d-none d-xl-inline fw-light">Notifications</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-2 ${active==='messages'?'active':''}">
                        <i class="fa-regular fa-envelope wd-sidebar-icon"></i>
                        <span class="d-none d-xl-inline fw-light">Messages</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-2 ${active==='bookmarks'?'active':''}">
                        <i class="fa-regular fa-bookmark wd-sidebar-icon"></i>
                        <span class="d-none d-xl-inline fw-light">Bookmarks</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-2 ${active==='lists'?'active':''}">
                        <i class="fa-regular fa-rectangle-list wd-sidebar-icon"></i>
                        <span class="d-none d-xl-inline fw-light">Lists</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-2 ${active==='profile'?'active':''}">
                        <i class="fa-regular fa-user wd-sidebar-icon"></i>
                        <span class="d-none d-xl-inline fw-light">Profile</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-2 ps-2 ${active==='more'?'active':''}">
                        <span class="fa-stack wd-sidebar-stack-icon">
                            <i class="fa-solid fa-ellipsis fa-stack-1x wd-fa-stack-0-8"></i>
                            <i class="fa-regular fa-circle fa-stack-1x"></i>
                        </span>
                        <span class="d-none d-xl-inline fw-light">More</span>
                    </a>
                </div>
                <button class="btn btn-primary w-100 mt-3 mb-3 rounded-pill wd-bg-blue">
                    Tuit
                </button>
            `);
}
export default NavigationSidebar;

// Test Code -
// function exploreComponent() {
//     $('#wd-explore').append(`
//         ${NavigationSidebar()}
//    `);
// }
// $(exploreComponent);