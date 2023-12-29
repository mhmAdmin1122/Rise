import Layout from "@/app/components/L/Layout";
import Image from "next/image";
import levelPic from "../../../../public/img/VIP1.png";
import React from "react";
import Spacer from "@/app/components/S/Spacer";
import VerticalSlider from "@/app/components/V/VerticalSlider";

const StartingPage = () => {
  return (
    <Layout classMainBox="layout-gradient">
      <div className="grid justify-center justify-items-center w-full py-[40px]">
        <div className="sliderBox">
            {/* <VerticalSlider /> */}
        </div>

        <div className="levelPriceBox w-[45%] rounded-[8px] px-[40px] py-[30px] bg-[#fff] text-[#000] border-[1px] border-gray-200 shadow-md shadow-gray-300 grid justify-center justify-items-center">
          <div className="boxheaderStart flex items-center justify-between my-4 w-[100%]">
            <h1 className="titleBox text-lg font-bold">VIP1</h1>
            <div className="leveldeatail flex items-center gap-2">
              <h2 className="text-lg font-bold">Level 1</h2>
              <Image src={levelPic} alt="levl-pic" width={35} height={35} />
            </div>
          </div>
          <div className="boxbodyStart flex justify-between gap-4 w-[100%]">
            <div className="rightsideBox w-[50%]">
              <h2 className="text-center text-[16px] my-2 font-medium">Daily Profit</h2>
              <h1 className="text-lg font-bold text-center my-2">USDT 0</h1>
              <h3 className="text-[14px] font-normal text-center my-2">
                Daily profit will be recalculated at 00:00 each day
              </h3>
            </div>
            <div className="leftsideBox w-[50%]">
              <h2 className="text-center text-[16px] my-2 font-medium">Total Balance</h2>
              <h1 className="text-lg font-bold text-center my-2">USDT 0.00</h1>
              <h3 className="text-[14px] font-normal text-center my-2">
                Each task profit will be automatically added to the total
                balance after submited product
              </h3>
            </div>
          </div>
        </div>

        <div className="btnstartingBox my-6 w-[45%] py-3 rounded-md  bg-[#00aee3] text-center">
            <button className="text-[#fff] font-bold text-xl">Start {"("}0/40{")"}</button>
        </div>

        <div className="hintImpBox w-[45%]">
            <h2 className="text-[16px] font-bold my-2">important hint</h2>
            <h3 className="text-gray-500 font-medium">• Working hours: 10:00-22:59</h3>
            <h3 className="text-gray-500 font-medium">• For more information, please consult customer service</h3>
        </div>


      </div>
      <Spacer />
    </Layout>
  );
};

export default StartingPage;
