import { Contenedor } from "./contenedor";

export function Lista({ tarea, del }) {
  return (
    <div>
      <section className="listaa" >
        {tarea.map((val) => {
          return (
            <article className="task" key={val.id} >
              <div className="list">
                {
                  <Contenedor
                    id={val.id}
                    texto={val.text2}
                    titulo={val.titulo2}
                    del={del}
                  />
                }
              </div>
            </article>);
        })}
      </section>
    </div>
  );
}

