import React from 'react'
import { FIT_CONSTANTS } from '../../../lib'

const FitRecordContentField = ({ globalMessageNumber, field }) => {
  const message = FIT_CONSTANTS.messages[globalMessageNumber]
  const type = FIT_CONSTANTS.types.fit_base_type[field.type]
  return (
    <div style={{margin: "8px 0"}}>
      {field && (
        <>
          <div>{'field: ' + message?.[field.definition]?.field}</div>
          <div>{'size: ' + field.size}</div>
          <div>{'type: ' + type}</div>
        </>
      )}
    </div>
  )
}

export default FitRecordContentField;