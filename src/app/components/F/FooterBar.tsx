import Image from "next/image";
import Link from "next/link";
import React from "react";
import homeIco from "../../../../public/img/homeico.png";
import startingIco from "../../../../public/img/startingIco.png";
import recordsIco from "../../../../public/img/recordsico.png";

const FooterBar = () => {
  return (
    <footer className="bg-[#004357]">
      <div>
        <Link href={"/page/home"}>
          <div>
            <Image src={homeIco} alt="Home-Ico" />
          </div>
          <h2>Home</h2>
        </Link>
        <Link href={"/page/starting"} className="startingIco-linker">
          <div>
            <Image src={startingIco} alt="Starting-Ico" />
          </div>
          <h2>Starting</h2>
        </Link>
        <Link href={"/page/records"}>
          <div>
            <Image src={recordsIco} alt="Records-Ico" />
          </div>
          <h2>Records</h2>
        </Link>
      </div>
    </footer>
  );
};

export default FooterBar;
