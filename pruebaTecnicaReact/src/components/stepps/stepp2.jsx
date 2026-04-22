import { useState } from 'react';
import { z } from 'zod';
import '../../styles/stepp2.scss';
import { TipoDepartamento, TipoDomicilio } from '../../data/options';

const userSchema = z.object({
  nombre: z.string().min(1),
  celular: z.string().length(10),
  idDomicilio: z.string().min(1),
  numero: z.string().min(5).max(10),
  email: z.string().email(),
  fechaNacimiento: z.string().min(1),
  direccion: z.string().min(1),
  ciudad: z.string().min(1),
  idDepartamento: z.string().min(1),
  barrio: z.string().min(1),
});

const Stepp2 = ({ card, onDataChange, savedData }) => {
  const { stepper } = card || {};
  const [formData, setFormData] = useState({
    stepper: stepper || 2,
    nombre: savedData?.nombre || "",
    celular: savedData?.celular || "",
    idDomicilio: savedData?.idDomicilio || "",
    numero: savedData?.numero || "",
    email: savedData?.email || "",
    fechaNacimiento: savedData?.fechaNacimiento || "",
    direccion: savedData?.direccion || "",
    ciudad: savedData?.ciudad || "",
    idDepartamento: savedData?.idDepartamento || "",
    barrio: savedData?.barrio || ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === "celular" || name === "numero") {
      finalValue = value.replace(/\D/g, "").slice(0, 10);
    }

    const updatedData = { ...formData, [name]: finalValue };
    setFormData(updatedData);

    // Validación reactiva: actualiza el estado de errores al escribir
    const result = userSchema.safeParse(updatedData);
    if (!result.success) {
      setErrors(result.error.format());
    } else {
      setErrors({});
    }

    if (onDataChange) onDataChange("datosFormulario", updatedData);
  };

  if (!card) return null;

  return (
    <div className="form-container">
      <div className="form-grid">
        <div className="form-group">
          <label>Nombre</label>
          <input 
            type="text" 
            name="nombre" 
            className={errors.nombre ? "error" : ""} 
            value={formData.nombre} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Número de Celular</label>
          <input 
            type="text" 
            inputMode="numeric"
            name="celular" 
            className={errors.celular ? "error" : ""} 
            value={formData.celular} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Tipo de Documento</label>
          <select 
            name="idDomicilio" 
            className={errors.idDomicilio ? "error" : ""} 
            value={formData.idDomicilio} 
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            {TipoDomicilio.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.text}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Número de Documento</label>
          <input 
            type="text" 
            inputMode="numeric"
            name="numero" 
            className={errors.numero ? "error" : ""} 
            value={formData.numero} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Correo Electrónico Corporativo</label>
          <input 
            type="email" 
            name="email" 
            className={errors.email ? "error" : ""} 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Fecha de Nacimiento</label>
          <input 
            type="date" 
            name="fechaNacimiento" 
            className={errors.fechaNacimiento ? "error" : ""} 
            value={formData.fechaNacimiento} 
            onChange={handleChange} 
          />
        </div>

        <div className="full-width">
            <h3 className="section-title">Domicilio</h3>
        </div>

        <div className="form-group">
          <label>Dirección de Residencia</label>
          <input type="text" name="direccion" className={errors.direccion ? "error" : ""} value={formData.direccion} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Ciudad / Municipio</label>
          <input type="text" name="ciudad" className={errors.ciudad ? "error" : ""} value={formData.ciudad} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Departamento</label>
          <select name="idDepartamento" className={errors.idDepartamento ? "error" : ""} value={formData.idDepartamento} onChange={handleChange}>
            <option value="">Seleccione una opción</option>
            {TipoDepartamento.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.text}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Barrio</label>
          <input type="text" name="barrio" className={errors.barrio ? "error" : ""} value={formData.barrio} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default Stepp2;
