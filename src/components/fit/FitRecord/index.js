import React from 'react'
import FitRecordHeader from '../FitRecordHeader'
import FitRecordContent from '../FitRecordContent'

const FitRecord = ({ record }) => {
  return (
    <div style={{margin: "8px", backgroundColor: '#6F6F6F'}}>
      {record && (
        <>
          <p>{'Record'}</p>
          <FitRecordHeader header={record.header} />
          <FitRecordContent content={record.content} />
        </>
      )}
    </div>
  )
}

export default FitRecord;