import { useState } from 'react';
import '../../styles/stepp5.scss';

const Stepp5 = ({ card, onDataChange, savedData }) => {
  const { stepper, options } = card || {};
  const [opcion1] = options || [];

  // 1. Estado inicial: el ID se llena solo cuando ambos checks son verdaderos
  const [checks, setChecks] = useState({
    check1: savedData?.id ? true : false,
    check2: savedData?.id ? true : false
  });

  if (!card) return null;

  // 2. Manejador de cambios para los checkboxes
  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    
    const updatedChecks = {
      ...checks,
      [name]: checked
    };

    setChecks(updatedChecks);

    if (onDataChange) {
      // El "id" solo se manda (como 1) si ambos términos están aceptados
      // Si falta uno, se manda null para que el padre bloquee el botón
      const isComplete = updatedChecks.check1 && updatedChecks.check2;
      
      const dataToSend = {
        stepper: stepper || 5,
        id: isComplete ? 1 : null 
      };

      onDataChange("aceptacionTerminos", dataToSend);
    }
  };

  return (
    <div className="opcion-container-text">
      <h3>{opcion1?.title}</h3>
      
      <p 
        className="formatted-text"
        dangerouslySetInnerHTML={{ 
          __html: opcion1?.text.replace(/\n/g, '<br />') 
        }} 
      />

      <section className="checks">
        <div>
          <input 
            type="checkbox" 
            id="check1" 
            name="check1" 
            checked={checks.check1}
            onChange={handleCheckChange} 
          />
          <label htmlFor="check1">Confirmo que he leído y acepto los términos y condiciones.</label>
        </div>
        <div>
          <input 
            type="checkbox" 
            id="check2" 
            name="check2" 
            checked={checks.check2}
            onChange={handleCheckChange} 
          />
          <label htmlFor="check2">Acepto el tratamiento de mis datos personales.</label>
        </div>
      </section>
    </div>
  );
};

export default Stepp5;
