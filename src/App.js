import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [linea1, setlinea1] = useState("");
  const [linea2, setlinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (valor) {
    setlinea1(valor.target.value)

  }

  const onChangeLinea2 = function (valor) {
    setlinea2(valor.target.value)

  }

  const onChangeImagen = function (valor) {
    setImagen(valor.target.value)

  }

  const onChangeExportar = function (valor) {
    
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      
      var link= document.createElement("a")
      link.download= "meme.png"
      link.href=img
      link.click()
  });
  }
  return (
    <div className="App">
      {/* Selector de memes */}
      <select onChange={onChangeImagen}>
        <option value="meme1">Meme 1</option>
        <option value="meme2">Meme 2</option>
        <option value="meme3">Meme 3</option>
        <option value="meme4">Meme 4</option>
      </select>  <br />

      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"></input> <br />
      <input type="text" onChange={onChangeLinea2} placeholder="Linea 2"></input> <br />
      <button onClick={onChangeExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span> {linea1}</span> <br />
        <span> {linea2}</span><br />
        <img src={"/img/" + imagen + ".jpg"}></img>

      </div>


    </div>
  );
}

export default App;
