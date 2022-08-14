import React from "react";
import VideoPlayer from "./VideoPlayer";
import Sidebar from "./Sidebar";
import Notifications from "./Notification";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center w-full h-[60vh] my-12">
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default Dashboard;
