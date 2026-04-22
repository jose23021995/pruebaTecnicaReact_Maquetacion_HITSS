import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import '../../styles/Stepp4.scss';
import { EntidadDePertenencia, OperadorTelefonico } from '../../data/options';

// 1. Definimos el esquema de validación con Zod
const schema = z.object({
  idOperador: z.string().min(1, "Selecciona un operador"),
  numero: z.string()
    .min(10, "El número debe tener 10 dígitos")
    .max(10, "El número debe tener 10 dígitos")
    .regex(/^\d+$/, "Solo se permiten números"),
  idEntidad: z.string().min(1, "Selecciona una entidad"),
  stepper: z.number()
});

const Stepp4 = ({ card, onDataChange, savedData }) => {
  const { stepper, form } = card || {};
  const { input_operador, input_celular, input_entidad } = form || {};

  // 2. Inicializamos React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      stepper: stepper || 4,
      idOperador: savedData?.idOperador || "",
      numero: savedData?.numero || "",
      idEntidad: savedData?.idEntidad || ""
    },
    mode: "onChange" // Valida mientras el usuario escribe
  });

  // 3. Escuchar cambios para reportar al padre (SaveStepper)
  const allValues = watch(); 
  useEffect(() => {
    if (onDataChange) {
      onDataChange("datosPortabilidad", allValues);
    }
  }, [allValues, onDataChange]);

  if (!card) return null;

  return (
    <div id="form-container">
      <form onSubmit={(e) => e.preventDefault()}>
        
        {/* Operador Actual */}
        <div className="form-group">
          <label>{input_operador}</label>
          <select {...register("idOperador")} className={errors.idOperador ? "error" : ""}>
            <option value="">Seleccionar</option>
            {OperadorTelefonico.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.text}</option>
            ))}
          </select>
          {errors.idOperador && <span className="error-msg">{errors.idOperador.message}</span>}
        </div>

        {/* Número de Celular */}
        {/* Número de Celular */}
<div className="form-group">
  <label>{input_celular}</label>
  <input 
    id='numeroTelefono' 
    type="tel" 
    placeholder="3001234567" 
    {...register("numero", {
      onChange: (e) => {
        // 1. Solo permite números usando regex
        const value = e.target.value.replace(/\D/g, ""); 
        // 2. Limita a máximo 10 caracteres
        e.target.value = value.slice(0, 10); 
      }
    })} 
    className={errors.numero ? "error" : ""} 
  />
  {errors.numero && <span className="error-msg">{errors.numero.message}</span>}
</div>


        {/* Entidad */}
        <div className="form-group">
          <label>{input_entidad}</label>
          <select {...register("idEntidad")} className={errors.idEntidad ? "error" : ""}>
            <option value="">Seleccionar</option>
            {EntidadDePertenencia.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.text}</option>
            ))}
          </select>
          {errors.idEntidad && <span className="error-msg">{errors.idEntidad.message}</span>}
        </div>

      </form>
    </div>
  );
};

export default Stepp4;
