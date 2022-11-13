import {Lista} from '../lista/lista';
import { useState,useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import "./ver.css";

export function Ver() {
    const [tarea, setTarea] = useState([]);
    let id = useParams()
  
    const show = (id) => {
      axios.get("http://localhost:3001/"+id.id).then((response) => {
      setTarea(response.data);
      console.log(response.data);
      });
    };
    useEffect(() => {
        show(id)
    }, [])

    const del = (id) => {
        axios.delete(`http://localhost:3001/delete/`, { data: { id: id } })
        const nuevo = tarea.filter((val) => {
          if (val.id !== id) {
            return val;
          }
        })
        setTarea(nuevo)
    }
    return(
        <div className='ver-tarea'>
          <h1 className='ver-tarea-titulo'>Ver Detalles</h1>
            <Lista  tarea={tarea} del={del} />
        </div>
    )
}
