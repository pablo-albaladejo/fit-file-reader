import React from 'react'

const FitRecordContentField = ({ field }) => {
  return (
    <div>
      {field && (
        <>
          <div>{'definition: ' + field.definition}</div>
          <div>{'size: ' + field.size}</div>
          <div>{'type: ' + field.type}</div>
        </>
      )}
    </div>
  )
}

export default FitRecordContentField;