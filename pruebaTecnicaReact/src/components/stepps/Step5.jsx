
import '../../styles/stepp5.scss';
const Stepp5 = ({ card }) => {
  const { options } = card;
  const [opcion1] = options;

  if (!card) return null;

  return (
    <div className="opcion-container-text">
      <h3>{opcion1.title}</h3>
      {/* 
        Usamos dangerouslySetInnerHTML para leer <b> 
        y replace para que los \n se vuelvan saltos de línea reales 
      */}
      <p 
        className="formatted-text"
        dangerouslySetInnerHTML={{ 
          __html: opcion1.text.replace(/\n/g, '<br />') 
        }} 
      />
      <section className="checks">
        <div>
        <input type="checkbox" id="confirm" name="confirm" value="confirm" />
        <label htmlFor="confirm">Confirmo que he leído y acepto los términos</label>
      </div>
      <div>
        <input type="checkbox" id="confirm" name="confirm" value="confirm" />
        <label htmlFor="confirm">Confirmo que he leído y acepto los términos</label>
      </div>
      </section>
    </div>
  );
};

export default Stepp5;