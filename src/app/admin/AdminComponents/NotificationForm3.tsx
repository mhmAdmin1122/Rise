"use client";
import React, { useState } from "react";

const NotificationForm3 = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    userId: "",
    userName: "",
    message: "",
  });

  const handleInput = (e: any) => {
    setData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!data.userId || !data.userName || !data.message) {
      setError("Must provide all the credentials");
    } else {
      setError("");
    }
  }

  return (
      <form
        className="grid justify-items-center gap-4 justify-center w-full"
        onSubmit={handleSubmit}
      >
      <h1 className="text-xl font-bold mt-4">For Message</h1>
        <input
          type="text"
          className="bg-[#fff] text-[#00ff] outline-none font-medium px-[20px] py-[8px] rounded"
          placeholder="User Id"
          name="userId"
          required
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <input
          type="text"
          className="bg-[#fff] text-[#00ff] outline-none font-medium px-[20px] py-[8px] rounded"
          placeholder="Username"
          name="userName"
          required
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <textarea
          rows={5}
          cols={22}
          className="bg-[#fff] text-[#00ff] outline-none font-medium px-[20px] py-[8px] rounded"
          placeholder="Recharge Amount"
          name="message"
          required
          onChange={(e) => {
            handleInput(e);
          }}
        />
        {error && (
          <h5 className="text-yellow-300 text-[18px] font-bold">
            Error:
            <span className="text-[16px] font-medium">{error}</span>
          </h5>
        )}
        <button className="bg-[#fff] text-[#353535] font-bold px-[20px] py-[4px] rounded-sm">
          Submit Your Query
        </button>
      </form>
    
  );
};

export default NotificationForm3;
