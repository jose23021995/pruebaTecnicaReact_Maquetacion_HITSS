import { useState } from 'react'; // Importante
import '../../styles/stepp1.scss';

const Stepp1and3 = ({ card }) => {
  const [selectedId, setSelectedId] = useState(null); // Estado para el ID

  if (!card) return null;

  return (
    <div className="opcion-container">
      {card.options?.map((option) => (
        <div 
          key={option.id} 
          /* Si este es el ID seleccionado, añade la clase 'active' */
          className={`option-card ${selectedId === option.id ? 'active' : ''}`}
          onClick={() => setSelectedId(option.id)} // Permite seleccionar haciendo clic en toda la card
        >
          <div className="input">
            <input 
              type="radio" 
              id={option.id} 
              name="option" 
              value={option.id} 
              checked={selectedId === option.id} // Sincroniza el radio con el estado
              onChange={() => setSelectedId(option.id)}
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
