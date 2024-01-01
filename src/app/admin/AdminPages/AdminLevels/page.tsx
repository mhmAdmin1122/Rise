import React from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";
import Image from "next/image";
import roughPic from "../../../../../public/img/graph1.png";

const AdminLevels = () => {
  return (
    <AdminLayout>
      <div className="adminlevelcards">
        <div className="userListBox">
          <h1 className="text-4xl font-bold text-center">Upgrade User Level</h1>
          <div className="LeveluserBox">
            <div className="userImageBox">
              <Image src={roughPic} alt="user-pic/avatar" />
            </div>
            <div className="userDetailBox">
              <span>
                <h2>User Id:</h2>
                <h3>gf648fgrhf6f7rhf657yrhf64hbxnxht7wis</h3>
              </span>
              <span>
                <h2>User Level</h2>
                <h3>VIP1</h3>
                <form className="levelForm">
                  <select name="level">
                    <option value="level1">VIP 1</option>
                    <option value="level2">
                      VIP 2
                    </option>
                    <option value="level3">VIP 3</option>
                    <option value="level4">VIP 4</option>
                  </select>
                  <button type="submit">Update Query</button>
                </form>
              </span>
              <span>
                <h2>
                  Note:{" "}
                  <b className="text-[16px] font-medium">
                    Every Levels in the form will change by using action button
                  </b>
                </h2>
              </span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminLevels;
