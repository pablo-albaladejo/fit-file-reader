import React from 'react'
import FitRecordContentField from '../FitRecordContentField';

const FitRecordContent = ({ content }) => {
  return (
    <div>
      {content && (
        <>
          <div>{'architecture: ' + content.architecture}</div>
          <div>{'globalMessageNumber: ' + content.globalMessageNumber}</div>
          <div>{'reserved: ' + content.reserved}</div>
          <div>{'numFields: ' + content.numFields}</div>
          {content.fields && content.fields.map(field => <FitRecordContentField field={field} />)}
          <div>{'numDevFields: ' + content.numDevFields}</div>
          {content.devFields && content.devFields.map(field => <FitRecordContentField field={field} />)}
        </>
      )}
    </div>
  )
}

export default FitRecordContent;