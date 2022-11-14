import { useState, useEffect } from 'react';
import axios from "axios";
import "./history.css";
import { Contenedor } from '../lista/contenedor';

export function History() {
  const [tarea, setTarea] = useState([]);

  const show = () => {
    axios.get("http://localhost:3001/get").then((response) => {
      setTarea(response.data);
      console.log(response);
      console.log(tarea);
    });
  };
  useEffect(() => {
    show();
  }, []);

  return (
    <div className="contenedor">
      <h1 className='edit-titulo'>Historial</h1>
      <section className="history-list" >
        {tarea.map((val) => {
          return (
            <article className="task" key={val.id} >
              <div className="list">
                {
                  <Contenedor
                    id={val.id}
                    texto={val.text}
                    titulo={val.title}
                    del={undefined}
                  />
                }
              </div>
            </article>);
        })}
      </section>
    </div>
  );
}