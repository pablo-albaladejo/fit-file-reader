import React from 'react'

const FitRecordHeader = ({ header }) => {
  return (
    <div>
      {header && (
        <>
          <div>{'compressed: ' + header.compressed}</div>
          <div>{'developerDataFlag: ' + header.developerDataFlag}</div>
          <div>{'localMessageType: ' + header.localMessageType}</div>
          <div>{'messageType: ' + header.messageType}</div>
          <div>{'reserved: ' + header.reserved}</div>
        </>
      )}
    </div>
  )
}

export default FitRecordHeader;