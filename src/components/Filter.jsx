import { useState } from "react";
import categoryArr from "../json/category.json";

export default function Filter({ buscador, category }) {
  const [input, setInput] = useState("");
  const [option, setOption] = useState("general");
  function handleChangeInput(e) {
    const query = e.target.value;
    setInput(query);
  }
  function buscar(e) {
    e.preventDefault();
    if (input.trim() != "") {
      buscador(input);
    } else {
      alert("busqueda no sorportada");
    }
  }
  function filtrar(e) {
    e.preventDefault();
    category(option);
  }

  function handleKeyDown(e) {
    if (e.key == "Enter") {
      buscar(e);
    }
  }
  function handleChangeSelect(e) {
    e.preventDefault();
    setOption(e.target.value);
  }
  return (
    <div className="flex gap-4">
      <input
        placeholder="buscador"
        onKeyDown={handleKeyDown}
        onChange={handleChangeInput}
        value={input}
      ></input>
      <button
        onClick={buscar}
        className="w-auto h-10 p-2 bg-blue-400 rounded-xl text-white font-bold"
      >
        Buscar
      </button>
      <select
        name=""
        id=""
        className="w-24 h-auto"
        onChange={handleChangeSelect}
        value={option}
      >
        {categoryArr.map((e, index) => {
          return (
            <option key={index} className="w-auto h-auto" value={e}>
              {e}
            </option>
          );
        })}
      </select>
      <button
        onClick={filtrar}
        className="w-auto h-10 p-2 bg-blue-400 rounded-xl text-white font-bold"
      >
        Filtrar
      </button>
    </div>
  );
}
