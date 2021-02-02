import React from 'react'

const styles = {
  display: 'flex',
  flex: 1,
  backgroundColor: 'grey',
  padding: "32px",
  margin: "32px"
}

function Section({ children }) {
  return (
    <div style={styles}>
      <>
      {children}
      </>
    </div>
  );
}

export default Section;
