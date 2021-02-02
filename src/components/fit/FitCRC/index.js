import React from 'react'
import Section from '../../layout/section'

const FitCRC = ({ crc }) => {
  return (
    <Section>
      {crc && (
        <>
          <p>{'CRC'}</p>
          {JSON.stringify(crc)}
        </>
      )}
    </Section>
  )
}

export default FitCRC;