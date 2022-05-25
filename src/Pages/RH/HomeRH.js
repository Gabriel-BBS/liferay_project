import React from "react";

import "./HomeRH.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import homeUserFeedInfo from "../../Infos/home-user-feed-info";
import HomeUserFeedCard from "../../Components/CardsUser/HomeUserFeedCard";
import sidebarInfo from "../../Infos/sidebarRH-info";
import SidebarHomeRH from "../../Components/SideBars/HomeRHSideBar";
import Footer from "../../Components/layout/Footer";

function HomeRH() {
    const mdate = new Date();

    return(
        <div className="home-user-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar-left-home">
                    </div>
                    <div className="col-md-8 center-container-home">
                       
                        <div className="feed-home-container">
                            {homeUserFeedInfo.map((info) =>
                                <HomeUserFeedCard
                                    img={info.img}
                                    avatar={info.avatar}
                                    username={info.username}
                                    userjob={info.userjob}
                                    nameinst={info.nameinst}
                                    dateinst={info.dateinst}
                                    localeinst={info.localeinst}
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-md-2 sidebar-right-home">
                        <div className="sidebar-home-container">
                            {sidebarInfo.map((info) =>
                                <SidebarHomeRH
                                    avatar={info.avatar}
                                    name={info.name}
                                    job={info.job}
                                    titleEvpYear={info.titleEvpYear +" "+ mdate.getFullYear()}
                                    titleDonate={info.titleDonate}
                                    donateValue={info.donateValue}
                                    donateMax={info.donateMax}
                                    titleActivity = {info.titleActivity}
                                    activityValue={info.activityValue}
                                    activityMax={info.activityMax}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default HomeRH;
