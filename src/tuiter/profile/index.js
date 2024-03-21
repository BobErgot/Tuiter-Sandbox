import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    let birthDate = new Date(profile.dateOfBirth);
    return (<>
            <div className="position-relative">
                <img src={profile.bannerPicture}
                     width="100%" height="280px"/>
                <img src={profile.profilePicture}
                     className="wd-profile-avatar
                     position-absolute rounded-circle float-start"/>
            </div>
            <div className="mb-5">
                <Link to="/edit-profile">
                    <button className="btn btn-light fw-bold rounded-pill float-end mt-2 me-3">
                        Edit Profile
                    </button>
                </Link>
            </div>
            <div className="pt-4 ps-3">
                <h4 className="fw-bold mb-0">{profile.firstName} {profile.lastName}</h4>
                <h6 className="text-secondary">@{profile.handle}</h6>
                <p className="pt-4 pb-0 mb-0">
                    {profile.bio}

                </p>
                <p className="pt-0 mt-0">
                    <a target="_blank" href={profile.website} className="text-secondary">
                        {profile.website}
                    </a>
                </p>
                <div className="row">
                    <div className="col-3 text-secondary">
                        <i className="bi bi-geo-alt me-1"></i>
                        <span>{profile.location}</span>
                    </div>
                    <div className="col-4 text-secondary">
                        <i className="bi bi-balloon me-1"></i>
                        <span>{`Born ${birthDate.toLocaleDateString("en-US", {
                            timeZone: 'UTC',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}`}</span>
                    </div>
                    <div className="col text-secondary">
                        <i className="bi bi-calendar3 me-1"></i>
                        <span>{`Joined ${new Date(
                            parseInt(profile.dateJoined.split('-')[0]),
                            parseInt(profile.dateJoined.split('-')[1]) - 1
                        ).toLocaleDateString("en-US", {
                            timeZone: 'UTC',
                            month: 'long',
                            year: 'numeric'
                        })}`}</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        <span className="fw-bold me-1">{profile.followingCount}</span>
                        <span className="text-secondary">Following</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold me-1">{profile.followersCount}</span>
                        <span className="text-secondary">Followers</span>
                    </div>
                </div>
            </div>
        </>);
};

export default ProfileComponent;