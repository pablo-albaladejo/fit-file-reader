import React from 'react'

const FitRecordHeader = ({ header }) => {
  return (
    <div>
      {header && (
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
                <td>Header Type</td>
                <td>{header.compressed}</td>
              </tr>
              <tr>
                <td>Message Type</td>
                <td>{header.messageType}</td>
              </tr>
              <tr>
                <td>Developer flag</td>
                <td>{header.developerDataFlag}</td>
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
        </>
      )}
    </div>
  )
}

export default FitRecordHeader;