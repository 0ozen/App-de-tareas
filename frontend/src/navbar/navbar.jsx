import { Link, NavLink } from "react-router-dom";
import "./nav.css";


export function Navbar() {
  return (
    <section className="cont">
      <h1>Blog de tareas</h1>
      <section className="options">
        <div className="navbar-list">
          <div className="opciones">
            <li className="crear">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "link active" : "link";
                }}
                end to="/">
                Nueva tarea
              </NavLink>
            </li>
            <li className="ver">
              <div
                className="linke"
              >
                Ver
              </div>
            </li>
            <li className="editar">
              <div
                className="linke"
              >
                Editar
              </div>
            </li>
          </div>
          <li className="historial">
            <NavLink
              className="link"
              end to="/history">
              Historial
            </NavLink>
          </li>
        </div>
      </section>
    </section>
  );
}