// Menu.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/registro">Registro</Link>
        </li>
        <li>
          <Link to="/inicio-sesion">Inicio de Sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
