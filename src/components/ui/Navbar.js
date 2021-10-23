import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="menu-container">
      <h2>Todo Limpieza</h2>

      <ul className="menu">
        <Link to="/productos" className="menu-option">
          <span>
            <i className="fas fa-clipboard"></i>
          </span>
          Productos
        </Link>
        <Link to="/registros" className="menu-option">
          <span>
            <i className="fas fa-database"></i>
          </span>
          Registros
        </Link>
        <Link to="/dashboard" className="menu-option">
          <span>
            <i className="fas fa-chart-line"></i>
          </span>
          Dashboard
        </Link>
        <Link to="/clientes" className="menu-option">
          <span>
            <i className="fas fa-user"></i>
          </span>
          Clientes
        </Link>
        <Link to="/login" className="menu-option">
          <span>
            <i className="fas fa-arrow-circle-left"></i>
          </span>
          Salir
        </Link>
      </ul>
    </div>
  );
};
