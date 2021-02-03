import React from 'react'
import { FIT_CONSTANTS } from '../../../lib';

const FitRecordHeader = ({ header }) => {
  return (
    <div>
      {header && (
        <table style={{ style: "100%", margin: "8px" }}>
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Key</th>
              <th style={{ width: "50%" }}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Header Type</td>
              <td>{FIT_CONSTANTS.types.compressed[header.compressed]}</td>
            </tr>
            <tr>
              <td>Message Type</td>
              <td>{FIT_CONSTANTS.types.message[header.messageType]}</td>
            </tr>
            <tr>
              <td>Developer flag</td>
              <td>{FIT_CONSTANTS.types.developer_flag[header.developerDataFlag]}</td>
            </tr>
            <tr>
              <td>Message Type Specific</td>
              <td>{header.reserved}</td>
            </tr>
            <tr>
              <td>Local Message Type</td>
              <td>{header.localMessageType}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default FitRecordHeader;