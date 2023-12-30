import React from "react";
import SideBar from "../AdminComponents/SideBar";

const AdminLayout = ({ children }: any) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="adminBodyBox w-[80%] p-[30px] h-screen">
        <div className="w-full bg-[#00ff] text-[#fff] h-full px-[30px] py-[20px] rounded-md shadow-lg shadow-gray-500">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
