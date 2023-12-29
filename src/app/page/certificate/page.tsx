import React from "react";
import Image from "next/image";
import pic from "../../../../public/img/certificatePicSeer.jpg";
import PageNavbar from "@/app/components/P/PageNavbar";

const Certificate = () => {
  return (
    <>
      <head>
        <title>Cert || Rise</title>
      </head>
      <PageNavbar title="Cert" />
      <div className="CertificateImage-Box bg-[#c5e7ff] grid justify-items-center py-[50px]">
        <Image src={pic} alt="" />
      </div>
    </>
  );
};

export default Certificate;
