import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

function exploreComponent() {
    $('#wd-home').append(`
        <div class="col-2 col-lg-1 col-xl-2 py-2">
            ${NavigationSidebar()}
        </div>
         <div class="col-10 col-lg-7 col-xl-6 py-2 border border-light px-0">
            ${PostList()}
         </div>
        <div class="d-none d-lg-block col-lg-4 py-2">
            ${PostSummaryList()}
        </div>
   `);
}
$(exploreComponent);