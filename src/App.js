import React from 'react'
import FitFileViewer from './components/fit/FitFileViewer'
import { parseFile } from './libs/fit'


const styles = {
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white"
}

function App() {

  const [fitFile, setFitFile] = React.useState(null)

  var fReader = new FileReader();
  fReader.onload = function (e) {
    const arrayBuffer = e.target.result
    setFitFile(parseFile(arrayBuffer))
  }

  const handleChange = (files) => {
    var file = files[0];
    fReader.readAsArrayBuffer(file);
  }

  return (
    <div style={styles}>
      <input type="file" id="myfileinput" multiple accept=".fit" onChange={(e) => handleChange(e.target.files)}></input>
      <FitFileViewer
        file={fitFile}
      />
    </div>
  );
}

export default App;
