// ExpertLoginForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos de Bootstrap

const ExpertLoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para iniciar sesión con los datos del formulario
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión como Usuario Experto</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos de entrada */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Botón de inicio de sesión */}
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default ExpertLoginForm;
