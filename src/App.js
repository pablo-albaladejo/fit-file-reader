import './App.css';

var fReader = new FileReader();

fReader.onload = function (e) {
  const arrayBuffer = e.target.result
  console.log(arrayBuffer)
}

const handleChange = (files) => {
  var file = files[0];
  fReader.readAsArrayBuffer(file);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type="file" id="myfileinput" multiple accept=".fit" onChange={(e) => handleChange(e.target.files)}></input>
      </header>
    </div>
  );
}

export default App;
