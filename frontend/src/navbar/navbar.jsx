import { Link, NavLink } from "react-router-dom";
import "./nav.css";


export function Navbar() {
  return (
    <>
      <section className="cont">
        <div className="logo">
          <h1>
            <a href="/">Blog de tareas</a>
          </h1>
        </div>
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
              <div>
                <div
                  className="nav-link">
                  Ver
                </div>
                <div className="nav-link">
                  Editar
                </div>
              </div>
              <li className="historial">
                <NavLink
                  className="link"
                  end to="/history">
                  Historial
                </NavLink>
              </li>
            </div>

          </div>
        </section>
      </section>
    </>
  );
}