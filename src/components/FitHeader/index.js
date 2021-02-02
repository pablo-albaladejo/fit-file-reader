import React from 'react'

const FitHeader = ({ header }) => {
  return (
    <div>
      {header && (
        <h1>
          {JSON.stringify(header)}
        </h1>
      )}
    </div>
  )
}

export default FitHeader;