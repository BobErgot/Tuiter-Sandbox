import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row align-items-center px-4">
                <div class="col-10">
                    <div class="position-relative">
                        <span class="position-absolute wd-padding-12-6 text-secondary">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <label class="w-100">
                            <input type="text" class="ps-5 form-control rounded-pill wd-search"
                                   placeholder="Search Tuiter">
                        </label>
                    </div>
                </div>
                <div class="col-2 text-end">
                    <a class="text-white-50" href="explore-settings.html">
                        <i class="fa-solid fa-gear fa-1x"></i>
                    </a>
                </div>
            </div>
            <ul class="nav mt-2 justify-content-between border-bottom border-light">
                <li class="nav-item wd-topic-tab text-bg-primary rounded-top">
                    <a class="nav-link active px-0 mx-3 text-white" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="news.html">News</a>
                </li>
                <li class="nav-item d-none d-sm-inline">
                    <a class="nav-link text-white" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-inline">
                    <a class="nav-link text-white" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div class="position-relative">
                <img class="mt-2" src="../../images/Starship-Mk1-Day.png" width="100%"
                     alt="SpaceX's Starship image"/>
                <div class="position-absolute bottom-0 left-0 text-white ps-3 border-bottom border-light">
                    <h4 class="fw-bolder">
                        SpaceX's Starship
                    </h4>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;


// Test Code -
// function exploreComponent() {
//     $('#wd-explore').append(`
//         ${ExploreComponent()}
//    `);
// }
// $(exploreComponent);