import React from 'react'

const FitCRC = ({ crc }) => {
  return (
    <div>
      {crc && (
        <h1>
          {JSON.stringify(crc)}
        </h1>
      )}
    </div>
  )
}

export default FitCRC;