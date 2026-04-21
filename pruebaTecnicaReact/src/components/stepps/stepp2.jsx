import { useState } from 'react';
import '../../styles/stepp2.scss';
import { TipoDepartamento, TipoDomicilio } from '../../data/options';

const Stepp2 = ({ card, onDataChange, savedData }) => {
  const { stepper } = card || {};

  // Inicializamos el estado con el objeto completo (usando lo guardado o nulos)
  const [formData, setFormData] = useState({
    stepper: stepper || 2,
    nombre: savedData?.nombre || null,
    celular: savedData?.celular || null,
    idDomicilio: savedData?.idDomicilio || null,
    numero: savedData?.numero || null,
    email: savedData?.email || null,
    fechaNacimiento: savedData?.fechaNacimiento || null,
    direccion: savedData?.direccion || null,
    ciudad: savedData?.ciudad || null,
    idDepartamento: savedData?.idDepartamento || null,
    barrio: savedData?.barrio || null
  });

  if (!card) return null;

  // Función genérica para manejar cualquier cambio y avisar al padre
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    const updatedData = {
      ...formData,
      [name]: value === "" ? null : value
    };

    // Imprime el objeto completo cada vez que tecleas

    setFormData(updatedData);

    if (onDataChange) {
      onDataChange("datosFormulario", updatedData);
    }
  };


  return (
    <div className="form-container">
      <div className="form-grid">
        <div className="form-group">
          <label>Nombre</label>
          <input 
            type="text" 
            name="nombre" 
            value={formData.nombre || ""} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Número de Celular</label>
          <input 
            type="text" 
            name="celular" 
            value={formData.celular || ""} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Tipo de Documento</label>
          <div className="select-wrapper">
            <select name="idDomicilio" value={formData.idDomicilio || ""} onChange={handleChange}>
              <option value="">Seleccione una opción</option>
              {TipoDomicilio.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.text}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Número de Documento</label>
          <input 
            type="text" 
            name="numero" 
            value={formData.numero || ""} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Correo Electrónico Corporativo</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email || ""} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Fecha de Nacimiento</label>
          <div className="date-wrapper">
            <input 
              type="date" 
              name="fechaNacimiento" 
              value={formData.fechaNacimiento || ""} 
              onChange={handleChange} 
            />
          </div>
        </div>

        <h3 className="section-title">Domicilio</h3>

        <div className="form-group">
          <label>Dirección de Residencia</label>
          <input 
            type="text" 
            name="direccion" 
            value={formData.direccion || ""} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Ciudad / Municipio</label>
          <input 
            type="text" 
            name="ciudad" 
            value={formData.ciudad || ""} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Departamento</label>
          <div className="select-wrapper">
            <select name="idDepartamento" value={formData.idDepartamento || ""} onChange={handleChange}>
              <option value="">Seleccione una opción</option>
              {TipoDepartamento.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.text}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Barrio</label>
          <input 
            type="text" 
            name="barrio" 
            value={formData.barrio || ""} 
            onChange={handleChange} 
          />
        </div>
      </div>
    </div>
  );
};

export default Stepp2;
