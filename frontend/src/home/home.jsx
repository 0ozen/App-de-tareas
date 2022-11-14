import "./home.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Lista } from "../lista/lista.jsx";

export function Home() {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [tarea, setTarea] = useState([]);

  const addtitulo = (e) => {
    setTitulo(e.target.value);

  };
  const add = (e) => {
    setTexto(e.target.value);

  };
  const send = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/post", { titulo2: titulo, text2: texto });
    setTarea([...tarea, { titulo2: titulo, text2: texto }]);
    setTitulo('');
    setTexto('');
  };
  const del = (id) => {
    axios.delete(`http://localhost:3001/delete/`, { data: { id: id } });
    const nuevo = tarea.filter((val) => {
      if (val.id !== id) {
        return val;
      }
    });
    setTarea(nuevo);
  };
  const show = () => {
    axios.get("http://localhost:3001/").then((response) => {
      setTarea(response.data);
    });
  };
  useEffect(() => {
    show();
  }, []);

  return (
    <section className="contenedor">
      <div className="home">
        <h1>Agregar Tarea</h1>
        <div className="nueva-tarea">
          <div >
            <form >
              <div className="texto" >
                <label htmlFor="label-titulo">
                  Titulo
                </label>
                <input type="text" className="titulo" required onChange={(e) => { addtitulo(e); }} value={titulo} />
                <label htmlFor="label-titulo">
                  Descripción
                </label>
                <textarea className="tarea" required onChange={(e) => { add(e); }} value={texto} />
                <button className="send" type="submit" onClick={(e) => { send(e); }}>Agregar</button>
              </div>
            </form>
          </div>


          <div className="lista">
            <Lista tarea={tarea} del={del} />
          </div>

        </div>
      </div>
    </section>
  );
}

