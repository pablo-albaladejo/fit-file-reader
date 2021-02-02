import React from 'react'
import Section from '../../layout/section';

const FitHeader = ({ header }) => {
  return (
    <Section>
      {header && (
        <>
          <p>{'Header'}</p>
          <div>{'headerSize: ' + header.headerSize}</div>
          <div>{'protocolVersion: ' + header.protocolVersion}</div>
          <div>{'profileVersion: ' + header.profileVersion}</div>
          <div>{'dataSize: ' + header.dataSize}</div>
          <div>{'fileType: ' + header.fileType}</div>
          <div>{'crc: ' + header.crc}</div>
        </>
      )}
    </Section>
  )
}

export default FitHeader;