import React from 'react'
import AdminLayout from '../../AdminLayout/AdminLayout'
import Image from "next/image";
import roughPicfrom from "../../../../../public/img/graph1.png";

const AdminWithdraw = () => {
  return (
    <AdminLayout>
      <div className="w-full">
        <h1 className="text-4xl text-center font-bold">Update Withdraw</h1>
        <div className="lastRechargeBox w-full">
          <div className="listOfIduser bg-[#fff] px-[40px] py-[20px] rounded flex items-center gap-4 border-dashed border-[8px] border-blue-500 my-2">
            <div className="iamgeBox w-[30%]">
              <Image src={roughPicfrom} alt="avatar-pic" />
            </div>
            <div className="userDetail text-[#000] w-[70%]">
              <h2 className="UserId text-justify text-[16px] font-medium">
                7658924rtuhcnbdhe637teyud
              </h2>
              <h2 className="userName text-[18px] font-medium">hash24</h2>
              <h1 className="nameofuser text-[18px] font-bold">
                Muhammad Hasaan
              </h1>
              <h1 className="nameofuser text-[18px] font-bold">
                Ava.Balanace:{" "}
                <b className="text-blue-500 outline-none">
                  0.00 USDT
                </b>
              </h1>
              <form className="updateBalance flex items-center bg-[#fff] shadow-md shadow-gray-300 w-fit  rounded border-[1px] border-gray-200 my-[8px]">
                <input type="number" placeholder="Update Balance" className="outline-none pl-[12px]"/>
                <button type="submit" className="text-[16px] font-bold bg-blue-500 text-[#fff] px-[12px] py-[10px]">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminWithdraw
