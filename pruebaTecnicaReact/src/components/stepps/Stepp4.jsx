import { useState } from 'react';
import '../../styles/Stepp4.scss';
import { EntidadDePertenencia, OperadorTelefonico } from '../../data/options';

const Stepp4 = ({ card, onDataChange, savedData }) => {
  const { stepper, form } = card || {};
  const { input_operador, input_celular, input_entidad } = form || {};

  // 1. Estado inicial basado en tu estructura: { stepper: 4, idOperador, numero, idEntidad }
  const [formData, setFormData] = useState({
    stepper: stepper || 4,
    idOperador: savedData?.idOperador || null,
    numero: savedData?.numero || null,
    idEntidad: savedData?.idEntidad || null
  });

  if (!card) return null;

  // 2. Función genérica para reportar cambios al padre
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    const updatedData = {
      ...formData,
      [name]: value === "" ? null : value
    };

    setFormData(updatedData);

    if (onDataChange) {
      // Enviamos el objeto completo para que SaveStepper se actualice
      onDataChange("datosPortabilidad", updatedData);
    }
  };

  return (
    <div id="form-container">
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Operador Actual */}
        <div className="form-group">
          <label>{input_operador}</label>
          <select 
            name="idOperador" 
            value={formData.idOperador || ""} 
            onChange={handleChange}
          >
            <option value="">Seleccionar</option>
            {OperadorTelefonico.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.text}
              </option>
            ))}
          </select>
        </div>

        {/* Número de Celular */}
        <div className="form-group">
          <label>{input_celular}</label>
          <input 
            id='numeroTelefono'
            type="tel" 
            name="numero" 
            placeholder="44 5678 1234" 
            value={formData.numero || ""} 
            onChange={handleChange}
          />
        </div>

        {/* Entidad (Lada/País) */}
        <div className="form-group">
          <label>{input_entidad}</label>
          <select 
            name="idEntidad" 
            value={formData.idEntidad || ""} 
            onChange={handleChange}
          >
            <option value="">Seleccionar</option>
            {EntidadDePertenencia.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.text}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Stepp4;
