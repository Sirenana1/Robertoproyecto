// ExpertRegistrationForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos de Bootstrap

const ExpertRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: '',
    educationLevel: '',
    howDidYouFindUs: '',
    cvFile: '',
    agreedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h2>Registro de Usuario Experto</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos de entrada */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
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
          <div className="col-md-12">
            <label htmlFor="address" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="city" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">
              Estado
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="country" className="form-label">
              País
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="educationLevel" className="form-label">
              Nivel de Estudios
            </label>
            <select
              className="form-select"
              id="educationLevel"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
            >
              <option value="">Seleccione nivel de estudios</option>
              <option value="primaria">Primaria</option>
              <option value="secundaria">Secundaria</option>
              <option value="universidad">Universidad</option>
              {/* Otras opciones */}
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="howDidYouFindUs" className="form-label">
              ¿Cómo se enteró de nosotros?
            </label>
            <input
              type="text"
              className="form-control"
              id="howDidYouFindUs"
              name="howDidYouFindUs"
              value={formData.howDidYouFindUs}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="cvFile" className="form-label">
              Adjuntar CV
            </label>
            <input
              type="file"
              className="form-control"
              id="cvFile"
              name="cvFile"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Checkbox para aceptar términos y condiciones */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreedTerms"
            name="agreedTerms"
            checked={formData.agreedTerms}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="agreedTerms">
            Acepto los términos y condiciones
          </label>
        </div>

        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default ExpertRegistrationForm;
