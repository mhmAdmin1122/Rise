"use client";
import React, { useState } from "react";

const RecordsForm = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    userId: "",
    userName: "",
    productName: "",
    productPrice: "",
    profitPrice: "",
    category: "",
    image: "",
  });

  const handleInput = (e: any) => {
    setData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (
      !data.userId ||
      !data.userName ||
      !data.productName ||
      !data.productName ||
      !data.productPrice ||
      !data.profitPrice ||
      !data.category 
    ) {
      setError("Error => ***Must provide all the credentials");
    } else {
      setError("");
    }
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit} className="records_form">
      <input
        type="text"
        placeholder="User Id"
        name="userId"
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <input
        type="text"
        placeholder="Username"
        name="userName"
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <input
        type="text"
        placeholder="Product Name"
        name="productName"
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <input
        type="number"
        placeholder="Product Price"
        name="productPrice"
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <input
        type="number"
        placeholder="Profit Price"
        name="profitPrice"
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <input
        type="text"
        placeholder="Category (Pending, Completed, Frozen)"
        name="category"
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <input type="file" name="image" required accept="image/*" />
      {error && (
        <p className="bg-[#fff] px-[20px] py-[12px] rounded-md font-bold">
          <span className="text-red-700">{error}</span>
        </p>
      )}
      <button type="submit">Update Query</button>
    </form>
  );
};

export default RecordsForm;
