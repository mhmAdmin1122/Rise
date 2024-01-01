"use client";
import React, { useState } from "react";
import SideBar from "../AdminComponents/SideBar";

const AdminLayout = ({ children }: any) => {
  const [condition, setCondition] = useState(false);
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const handleOnSubmitCheck = (e: any) => {
    if (password == 7692) {
      setCondition(true);
    } else {
      setCondition(false);
      alert(`"please do not enter any invalid password we are accessing you IP to secure our services" because your enterd password ${password} is incorrect`)
    }
    console.log(condition);
  };

  return (
    <>
      {condition ? (
        <div className="flex">
          <SideBar />
          <div className="adminBodyBox w-[80%] p-[30px] h-screen">
            <div className="bodyboxform w-full bg-[#00ff] text-[#fff] h-full px-[30px] py-[20px] overflow-scroll overflow-x-hidden rounded-md shadow-lg shadow-gray-500">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <form
          className="securityBox bg-[#ececec] px-[20px] py-10px min-h-screen max-h-screen grid items-center justify-center"
          onSubmit={handleOnSubmitCheck}
        >
          <div className="bg-[#fff] text-[#000] pl-[30px] rounded shadow-md shadow-gray-300 border-[1px] border-gray-200">
            <input
              type="number"
              name="password"
              placeholder="Enter Password"
              className="outline-none"
              value={password}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
            <button className="px-[15px] py-[12px]">Check</button>
          </div>
        </form>
      )}
    </>
  );
};

export default AdminLayout;
