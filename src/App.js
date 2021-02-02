import React from 'react'
import FitFileViewer from './components/FitFileViewer'
import { parseFile } from './libs/fit'
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <input type="file" id="myfileinput" multiple accept=".fit" onChange={(e) => handleChange(e.target.files)}></input>
        <FitFileViewer
          file={fitFile}
        />
      </header>
    </div>
  );
}

export default App;
