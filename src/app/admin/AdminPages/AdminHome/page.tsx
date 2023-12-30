import React from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";
import Link from "next/link";

const AdminHome = () => {
  return (
    <AdminLayout>
      <div className="HomeAdminRise">
        <h2 className="text-2xl font-bold text-center">Admin Rise Home</h2>
        <div className="mainPagesCards flex items-center gap-10 flex-wrap justify-center my-6">
          <div className="PaymentPageCard admincards">
            <h2 className="text-2xl font-bold">Payments</h2>
            <div className="linksofcards flex gap-2 items-center justify-center my-2 text-lg font-medium">
              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminWithdraw"}
              >
                Withdraw
              </Link>

              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminRecharge"}
              >
                Recharge
              </Link>

              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminTransaction"}
              >
                Transaction
              </Link>
            </div>
          </div>

          <div className="EventsPageCard admincards">
            <h2 className="text-2xl font-bold">Events</h2>
            <div className="linksofcards flex gap-2 items-center justify-center my-2 text-lg font-medium">
              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminEvents"}
              >
                New Year
              </Link>

              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminEvents"}
              >
                Summer
              </Link>

              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminEvents"}
              >
                Winter
              </Link>
            </div>
          </div>

          <div className="RecordsPageCard admincards">
            <h2 className="text-2xl font-bold">Records</h2>
            <div className="linksofcards flex gap-2 items-center justify-center my-2 text-lg font-medium">
              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminRecords"}
              >
                Completed
              </Link>

              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminRecords"}
              >
                Pending
              </Link>

              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminRecords"}
              >
                Frozen
              </Link>
            </div>
          </div>

          <div className="PendingTaskPageCard admincards">
            <h2 className="text-2xl font-bold">Pending Tasks</h2>
            <div className="linksofcards flex gap-2 items-center justify-center my-2 text-lg font-medium">
              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminPendingTask"}
              >
                ??????
              </Link>

              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminPendingTask"}
              >
                ??????
              </Link>

              <Link
                className="text-gray-600 hover:text-blue-600 hover:underline"
                href={"/admin/AdminPages/AdminPendingTask"}
              >
                ??????
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminHome;
