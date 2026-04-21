import { useState } from 'react';
import '../../styles/stepp1.scss';

// 1. Agregamos onDataChange a las props
const Stepp1and3 = ({ card, onDataChange, savedData }) => { 
  const { stepper } = card;
  
  // Inicializamos el estado con el id que viene en savedData (si existe)
  const [selectedId, setSelectedId] = useState(savedData?.id || null);
  
  if (!card) return null;

  const handleSelect = (id) => {
    setSelectedId(id);
    if (onDataChange) {
      const dataToSend = {
        id: id,
        stepper: stepper
      };
      onDataChange("opcionSeleccionada", dataToSend);
    }
  };

  return (
    <div className="opcion-container">
      {card.options?.map((option) => (
        <div 
          key={option.id} 
          className={`option-card ${selectedId === option.id ? 'active' : ''}`}
          // 2. Corregido: Quitamos la doble flecha
          onClick={() => handleSelect(option.id)} 
        >
          <div className="input">
            <input 
              type="radio" 
              id={option.id} 
              name="option" 
              value={option.id} 
              checked={selectedId === option.id}
              // 3. Corregido: Quitamos la doble flecha
              onChange={() => handleSelect(option.id)}
            />
          </div>
          <div className="text">
            <h3>{option.title}</h3>
            <b>{option.subtitle}</b>
            <p>{option.text}</p>
          </div>
          {option.img && (
            <div className="img">
              <img src={option.img} alt={option.title} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepp1and3;
