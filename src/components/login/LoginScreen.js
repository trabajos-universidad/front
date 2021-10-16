import React from 'react';

export const LoginScreen = () => {
  return (
    <div className="login__main">
      <div>
        <h1 className="login__title">Todo Limpieza</h1>
      </div>
      <div className="login__form-container">
        <h2>Login</h2>
        <form className="login__form">
          <label className="login__form-icon">
            <i className="fas fa-user"></i>
          </label>
          <input
            type="text"
            nombre="correo"
            placeholder="Ingrese el nombre de usuario"
            className="login__input"
          />
          <label className="login__form-icon">
            <i className="fas fa-lock"></i>
          </label>
          <input
            type="password"
            nombre="password"
            placeholder="Ingrese su contraseña"
            className="login__input"
          />
          <button className="login__button" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};
