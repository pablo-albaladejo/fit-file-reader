import React from 'react'
import Section from '../../layout/section';
import FitRecord from '../FitRecord'

const FitRecords = ({ records }) => {
  return (
    <Section>
      <div style={{flexDirection: 'column'}}>
        <p>{'Records'}</p>
        {records && records.map((record) => <FitRecord record={record} />)}
      </div>
    </Section>
  )
}

export default FitRecords;