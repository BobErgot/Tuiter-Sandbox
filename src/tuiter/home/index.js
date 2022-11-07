import React from "react";
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <>
            <div className="container text-center">
                <h4>Home</h4>
            </div>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;

