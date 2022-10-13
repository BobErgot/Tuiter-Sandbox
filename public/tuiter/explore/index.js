import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="col-2 col-lg-1 col-xl-2 py-2">
            ${NavigationSidebar()}
        </div>
         <div class="col-10 col-lg-7 col-xl-6 py-2 border border-light px-0">
         </div>
        <div class="d-none d-lg-block col-lg-4 py-2">
            ${WhoToFollowList()}
        </div>
   `);
}
$(exploreComponent);