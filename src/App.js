import React from 'react'
import FitFileViewer from './components/fit/FitFileViewer'
import { fitReader } from './lib'
import WeightScaleSingleUserFIT from './examples/WeightScaleSingleUser.fit'

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
    setFitFile(fitReader(arrayBuffer))
  }

  const handleChange = (file) => {
    fReader.readAsArrayBuffer(file);
  }

  function readFile(file) {
    var rawFile = new XMLHttpRequest()
    rawFile.responseType = "blob";
    rawFile.open("GET", file, true);

    rawFile.onload = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          handleChange(rawFile.response)

        }
      }
    }
    rawFile.send(null);
  }

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') readFile(WeightScaleSingleUserFIT,)
  }, [])

  return (
    <div style={styles}>
      <input type="file" id="myfileinput" accept=".fit" onChange={(e) => handleChange(e.target.files[0])}></input>
      <FitFileViewer
        file={fitFile}
      />
    </div>
  );
}

export default App;
