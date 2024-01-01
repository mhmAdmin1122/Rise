import React from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";
import NotificationForm from "../../AdminComponents/NotificationForm";
import NotificationForm3 from "../../AdminComponents/NotificationForm3";
import NotificationForm2 from "../../AdminComponents/NotificationForm2";

const AdminTransaction = () => {
  return (
    <AdminLayout>
      <div className="w-full">
        <h1 className="text-4xl text-center font-bold">
          Triger Transaction Notification
        </h1>
        <div className="formBox flex justify-center gap-10">
          {/* amount Update Form */}
          <NotificationForm />
          {/* withdrwal notification form */}
          <NotificationForm2 />
          {/* other activity form */}
          <NotificationForm3 />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminTransaction;
