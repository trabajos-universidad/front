import React from 'react';
import { Link } from 'react-router-dom';

export const AsideBar = () => {
  return (
    <aside className="asidebar">
      <ul className="asidebar__menu">
        <Link to="/productos" className="asidebar__option">
          <span className="asidebar__icon-menu">
            <i className="far fa-clipboard"></i>
          </span>
          Productos
        </Link>
        <Link to="/registros" className="asidebar__option">
          <span className="asidebar__icon-menu">
            <i className="fas fa-server"></i>
          </span>
          Registros
        </Link>
        <Link to="/dashboard" className="asidebar__option">
          <span className="asidebar__icon-menu">
            <i className="far fa-chart-bar"></i>
          </span>
          DashBoard
        </Link>
        <Link to="/clientes" className="asidebar__option">
          <span className="asidebar__icon-menu">
            <i className="fas fa-user"></i>
          </span>
          Clientes
        </Link>
        <Link to="/login" className="asidebar__option">
          <span className="asidebar__icon-menu">
            <i className="far fa-arrow-alt-circle-left"></i>
          </span>
          Salir
        </Link>
      </ul>
    </aside>
  );
};
