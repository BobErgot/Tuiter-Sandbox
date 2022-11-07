import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {updateProfile} from "../profile/profile-reducer";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    const [profileName, setProfileName] = useState(profile.firstName + " " + profile.lastName);
    const [profileBio, setProfileBio] = useState(profile.bio);
    const [profileLocation, setProfileLocation] = useState(profile.location);
    const [profileWebsite, setProfileWebsite] = useState(profile.website);
    const [profileDOB, setProfileDOB] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();
    const updateProfileHandler = () => {
        const newName = profileName.split(" ");
        const newFirstName = newName[0];
        newName.splice(0, 1);
        const newLastName = newName.join(" ");
        const newProfile = {
            ...profile,
            firstName: newFirstName,
            lastName: newLastName,
            bio: profileBio,
            location: profileLocation,
            website: profileWebsite,
            dateOfBirth: profileDOB
        }
        dispatch(updateProfile(newProfile));
    }

    return (
        <div className="mb-4">
            <div className="row mb-2">
                <div className="col-1 ms-3 align-self-center">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg"></i>
                    </Link>
                </div>
                <div className="col">
                    <h5 className="mt-2">Edit Profile</h5>
                </div>
                <div className="col-3">
                    <button className="btn btn-dark rounded-pill float-end me-3"
                            onClick={() => updateProfileHandler(profile)}>
                        <span className="px-2 fw-bold">Save</span>
                    </button>
                </div>
            </div>
            <div className="container position-relative">
                <img src={profile.bannerPicture}
                     width="100%" height="280px"/>
                <img src={profile.profilePicture}
                     className="wd-profile-avatar
                     position-absolute rounded-circle float-start"/>
            </div>
            <div className="container mt-5 ps-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="profile-name" className="ms-1">Name</label>
                        <input className="form-control" id="profile-name"
                               value={profileName}
                               onChange={(event) => setProfileName(event.target.value)}
                               placeholder="Name"/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="profile-bio" className="ms-1">Bio</label>
                        <textarea className="form-control" id="profile-bio"
                                  value={profileBio}
                                  onChange={(event) => setProfileBio(event.target.value)}
                                  placeholder="Bio"
                                  rows="3"></textarea>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="profile-location" className="ms-1">Location</label>
                        <input className="form-control" id="profile-location"
                               value={profileLocation}
                               onChange={(event) => setProfileLocation(event.target.value)}
                               placeholder="Location"/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="profile-website" className="ms-1">Website</label>
                        <input className="form-control" id="profile-website"
                               value={profileWebsite}
                               onChange={(event) => setProfileWebsite(event.target.value)}
                               placeholder="Website"/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="profile-birthdate" className="ms-1">Birth date</label>
                        <input type="date" className="form-control" id="profile-birthdate"
                               value={profileDOB}
                               onChange={(event) => setProfileDOB(event.target.value)}
                               placeholder="Birth date"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileComponent;