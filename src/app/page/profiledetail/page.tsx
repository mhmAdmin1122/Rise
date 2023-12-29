import PageNavbar from "@/app/components/P/PageNavbar";
import Image from "next/image";
import React from "react";
import pic from "../../../../public/img/graph3.png";

const ProfileDetailUpdate = () => {
  return (
    <div>
      <PageNavbar title="Profile" url="/" />
      <div className="profileupadatebox bg-[#c5e7ff] h-screen px-[60px] py-[20px]">
        <div className="aboutPicBox bg-[#fff] rounded py-[10px]">
          <div className="avatarBox border-b-2 border-gray-200 flex items-center justify-between px-[20px] py-[12px]">
            <h2>Profile Image</h2>
            <div className="userPicandarrow flex items-center gap-3">
              <Image src={pic} alt="user-pic" width={40} height={40} />
              <b>&gt;</b>
            </div>
          </div>
          <div className="userNameBox flex items-center justify-between border-b-2 border-gray-200 px-[20px] py-[20px]">
            <h2>Username</h2>
            <h1>Hasaan</h1>
          </div>
          <div className="genderBox flex items-center justify-between px-[20px] py-[20px]">
            <h2>Gender</h2>
            <select className="outline-none">
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select>
          </div>
        </div>
        <div className="paswordsBox bg-[#fff] rounded py-[10px] my-10">
          <div className="withdrawPassBox border-b-2 border-gray-200 flex items-center justify-between px-[20px] py-[12px]">
            <h2>Withdraw Password</h2>
            <b>&gt;</b>
          </div>
          <div className="withdrawPassBox flex items-center justify-between px-[20px] py-[12px]">
            <h2>Login Password</h2>
            <b>&gt;</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailUpdate;
