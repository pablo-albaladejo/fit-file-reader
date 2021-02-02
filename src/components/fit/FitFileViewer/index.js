import React from 'react'
import FitCRC from '../FitCRC';
import FitHeader from '../FitHeader';
import FitRecords from '../FitRecords';

const FitFileViewer = ({ file }) => {
  return (
    <div>
      {file && (
        <>
          <FitHeader header={file.header} />
          <FitRecords records={file.records} />
          <FitCRC crc={file.crc} />
        </>
      )}
    </div>
  )
}

export default FitFileViewer;