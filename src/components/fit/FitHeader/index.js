import React from 'react'
import Section from '../../layout/section';

const FitHeader = ({ header }) => {
  return (
    <Section>
      {header && (
        <table style={{ style: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Key</th>
              <th style={{ width: "50%" }}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Header Size</td>
              <td>{header.headerSize}</td>
            </tr>
            <tr>
              <td>Protocol Version</td>
              <td>{header.protocolVersion}</td>
            </tr>
            <tr>
              <td>Profile Version</td>
              <td>{header.profileVersion}</td>
            </tr>
            <tr>
              <td>Data Size</td>
              <td>{header.dataSize}</td>
            </tr>
            <tr>
              <td>Data Type</td>
              <td>{header.fileType}</td>
            </tr>
            <tr>
              <td>CRC</td>
              <td>{header.crc}</td>
            </tr>
          </tbody>
        </table>
      )
      }
    </Section >
  )
}

export default FitHeader;