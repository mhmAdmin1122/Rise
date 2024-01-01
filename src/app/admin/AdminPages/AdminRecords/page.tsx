import React from 'react'
import AdminLayout from '../../AdminLayout/AdminLayout'
import RecordsForm from '../../AdminComponents/RecordsForm'

const AadminRecords = () => {
  return (
    <AdminLayout>
      <div>
        <h1 className='text-4xl font-bold text-center'>Update Records</h1>
        <div className='grid w-full justify-items-center my-4'>
          <RecordsForm />
        </div>
      </div>
    </AdminLayout>
  )
}

export default AadminRecords
