import React from 'react'

const FitRecords = ({ records }) => {
  return (
    <div>
      {records && (
        <h1>
          {JSON.stringify(records)}
        </h1>
      )}
    </div>
  )
}

export default FitRecords;