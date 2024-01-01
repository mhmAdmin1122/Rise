"use client";
import React, { useState } from "react";

const NotificationForm2 = () => {
    const [error, setError] = useState("");
  const [data, setData] = useState({
    userId: "",
    userName: "",
    withdrawAmount: "",
    lastAmount: "",
  });

  const handleInput = (e: any) => {
    setData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (
      !data.userId ||
      !data.userName ||
      !data.withdrawAmount ||
      !data.lastAmount
    ) {
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
      <h1 className="text-xl font-bold mt-4">For Withdraw Amount</h1>
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
      <input
        type="number"
        className="bg-[#fff] text-[#00ff] outline-none font-medium px-[20px] py-[8px] rounded"
        placeholder="Withdraw Amount"
        name="withdrawAmount"
        required
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <input
        type="number"
        className="bg-[#fff] text-[#00ff] outline-none font-medium px-[20px] py-[8px] rounded"
        placeholder="Last Amount"
        name="lastAmount"
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
  )
}

export default NotificationForm2
