import { Link } from "react-router-dom";
import "./contenedor.css";

export function Contenedor({ id, texto, titulo, del }) {


  return (
    <div className="contenedor-tarea">

      <div className="top">
        <div className="opciones-tarea">
          <h3 className="titulo-tarea">{titulo}</h3>
          <div className="list-link">
            <Link className="edit" to={`/ver/${id}`} >ver</Link>
            <Link className="edit" to={`/edit/${id}`} >🖊</Link>
            <button className="x" onClick={() => { del(id); }} >✖</button>
          </div>
        </div>
      </div>
      <p className="texto-tarea">{texto}</p>

    </div>
  );
}
