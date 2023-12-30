import Image from "next/image";
import React from "react";
import logo from "../../../../public/img/logo2.png";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import adminPic from "../../../../public/img/Rise-removebg-preview.png";
import {
  GiReceiveMoney,
  GiPayMoney,
  GiTakeMyMoney,
  GiPlagueDoctorProfile,
  GiOpenFolder,
} from "react-icons/gi";
import {
  MdNotificationsActive,
  MdAnalytics,
  MdSupervisedUserCircle,
  MdOutlinePendingActions,
} from "react-icons/md";

const SideBar = () => {
  return (
    <div className="sidebarAdmin transition-all ease-in-out duration-1000 flex flex-col gap-4 w-[273px] bg-[#00ff] text-[#ececec] text-lg font-medium max-h-screen min-h-screen overflow-scroll overflow-x-hidden">
      <div className="logoArea flex items-center gap-2 px-[20px] justify-between  border-b-4 border-gray-100 h-[10%]">
        <Link href="/admin/AdminPages/AdminHome" className="p-[8px]">
          <Image src={logo} alt="logo" width={50} />
        </Link>
        <MdMenu className="text-6xl p-[8px] rounded cursor-pointer" />
      </div>

      <div className="tabsAdminBox flex flex-col gap-4 h-[75%] overflow-scroll overflow-x-hidden">
        <div className="paymentSection px-[20px] pb-[12px] border-b-2 border-gray-100 flex flex-col gap-4">
          <h2 className="text-xl font-bold">Payments</h2>
          <Link
            href="/admin/AdminPages/AdminWithdraw"
            className="flex items-center gap-2"
          >
            <GiReceiveMoney className="text-4xl" />
            <h2>Withdraw</h2>
          </Link>

          <Link
            href="/admin/AdminPages/AdminRecharge"
            className="flex items-center gap-2"
          >
            <GiPayMoney className="text-4xl" />
            <h2>Recharge</h2>
          </Link>

          <Link
            href="/admin/AdminPages/AdminTransaction"
            className="flex items-center gap-2"
          >
            <GiTakeMyMoney className="text-4xl" />
            <h2>Transaction</h2>
          </Link>
        </div>

        <div className="px-[20px] flex flex-col gap-4">
          <Link
            href="/admin/AdminPages/AdminEvents"
            className="flex items-center gap-2"
          >
            <GiPlagueDoctorProfile className="text-4xl" />
            <h2>Events</h2>
          </Link>

          <Link
            href="/admin/AdminPages/AdminRecords"
            className="flex items-center gap-2 "
          >
            <GiOpenFolder className="text-4xl" />
            <h2>Records</h2>
          </Link>

          <Link
            href="/admin/AdminPages/AdminNotification"
            className="flex items-center gap-2 "
          >
            <MdNotificationsActive className="text-4xl" />
            <h2>Notification</h2>
          </Link>

          <Link
            href="/admin/AdminPages/AdminLevels"
            className="flex items-center gap-2 "
          >
            <MdAnalytics className="text-4xl" />
            <h2>Levels</h2>
          </Link>

          <Link
            href="/admin/AdminPages/AdminUserDetails"
            className="flex items-center gap-2 "
          >
            <MdSupervisedUserCircle className="text-4xl" />
            <h2>User Details</h2>
          </Link>

          <Link
            href="/admin/AdminPages/AdminPendingTask"
            className="flex items-center gap-2 "
          >
            <MdOutlinePendingActions className="text-4xl" />
            <h2>Pending Tasks</h2>
          </Link>
        </div>
      </div>

      <div className="loginBox px-[20px] flex items-center gap-2">
        <div className="iamgeBox rounded-full p-2 bg-[#fff] w-fit">
          <Image src={adminPic} alt="user-pic" width={40} className="" />
        </div>
        <h2 className="username">HasherAdmin942</h2>
      </div>
    </div>
  );
};

export default SideBar;
