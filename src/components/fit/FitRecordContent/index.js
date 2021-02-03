import React from 'react'
import { FIT_CONSTANTS } from '../../../lib';
import FitRecordContentField from '../FitRecordContentField';

const FitRecordContent = ({ content }) => {
  return (
    <div>
      {content && (
        <>
          <table style={{ style: "100%", margin: "8px" }}>
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Key</th>
                <th style={{ width: "50%" }}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reserved</td>
                <td>{content.reserved}</td>
              </tr>
              <tr>
                <td>Architecture</td>
                <td>{FIT_CONSTANTS.types.architecture[content.architecture]}</td>
              </tr>
              <tr>
                <td>Global Message Number</td>
                <td>{FIT_CONSTANTS.messages[content.globalMessageNumber]?.name}</td>
              </tr>
              <tr>
                <td>Fields</td>
                <td>{content.numFields}</td>
              </tr>
              <tr>
                <td>Fields Definition</td>
                <td>{content.fields && content.fields.map((field, index) => {
                  return <FitRecordContentField key={'field_content_' + index} globalMessageNumber={content.globalMessageNumber} field={field} />
                })}</td>
              </tr>
              <tr>
                <td>Dev Fields</td>
                <td>{content.numDevFields}</td>
              </tr>
              <tr>
                <td>Dev Fields Definition</td>
                <td>{content.devFields && content.devFields.map((field, index) => <FitRecordContentField key={'dev_field_content_' + index} globalMessageNumber={content.globalMessageNumber} field={field} />)}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default FitRecordContent;