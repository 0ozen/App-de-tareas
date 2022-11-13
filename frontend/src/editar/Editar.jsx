import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import "./edit.css";

export function Edit() {

  const [Titulo, setTitulo] = useState("");
  const [Texto, setTexto] = useState("");
  const [tarea, setTarea] = useState([]);

  const navigate = useNavigate();

  let { id } = useParams();
  id = parseInt(id);

  const addtitulo = (e) => {
    setTitulo(e.target.value);
  };
  const add = (e) => {
    setTexto(e.target.value);
  };
  const send = (e, id) => {
    e.preventDefault();
    axios.put("http://localhost:3001/edit/", { titulo2: Titulo, text2: Texto, id: id }).then((response) => {
      console.log(response);
    });
    navigate('/');
  };
  const show = () => {
    axios.get("http://localhost:3001/").then((response) => {

      response.data.filter((val) => {
        if (val.id === id) {
          setTarea(val);
          setTitulo(val.titulo2);
          setTexto(val.text2);
          console.log(tarea);
        }
      });
    });

  };

  useEffect(() => {
    show();
  }, []);


  return (
    <div>
      <h1 className='edit-titulo'>Editar Tarea</h1>
      <div className='edit'>
        <div className="texto">
          <label htmlFor="label-titulo">
            Title
          </label>
          <input type="text" required className="titulo"
            defaultValue={tarea.titulo2}
            onChange={(e) => { addtitulo(e); }}
          />
          <label htmlFor="label-titulo">
            Details
          </label>
          <textarea type="text" required
            defaultValue={tarea.text2}
            onChange={(e) => { add(e); }}
            className="tarea"
          />
          <button className="send" type="submit" onClick={(e) => { send(e, tarea.id); }}>Agregar</button>
        </div>
      </div>
    </div>
  );
}