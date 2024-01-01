import React from 'react'
import AdminLayout from '../../AdminLayout/AdminLayout'
import NotificationMessageForm from '../../AdminComponents/NotificationMessageForm'

const AdminNotification = () => {
  return (
    <AdminLayout>
      <div>
        <h1 className='text-4xl font-bold text-center'>Send Notification</h1>
        <div className='grid justify-items-center w-full'>
          <NotificationMessageForm />
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminNotification
