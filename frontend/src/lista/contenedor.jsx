import { Link } from "react-router-dom";
import "./contenedor.css";

export function Contenedor({ id, texto, titulo, del }) {


  return (
    <div className="contenedor-tarea">
      <div className="tarea">
        <div className="top">
          <h2 className="titulo-tarea">{titulo}</h2>
          <div className="opciones-tarea">

            <Link className="edit" to={`/ver/${id}`} >ver</Link>

            <Link className="edit" to={`/edit/${id}`} >🖊</Link>
            <button className="x" onClick={() => { del(id); }} >✖</button>
          </div>
        </div>
        <p className="texto-tarea">{texto}</p>
      </div>
    </div>
  );
}
