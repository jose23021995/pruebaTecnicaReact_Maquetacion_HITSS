import '../styles/end.scss';
import { Stepper } from '../data/texts';

const SteppersEnd = () => {
    const step = Stepper.body?.[1];
    if (!step) return <div>No hay data</div>;
    const { title, button_next, button_return,button_end,card,img } = step;
    const currentCard = card[0];
    const { title: cardTitle, text } = currentCard;
    const handleFinish = () => { 
        //alert en forma de pregunta
        if (window.confirm("¿Deseas volver al inicio?\n esta accion borrara tu progreso")) {
            window.location.href = '/';
        }else{
            alert("¡Gracias por completar el proceso!");
        }

        
      }
    return (
    <div id="steppers-end">
      <div className="container">
        <h2><img src={img} alt="" /> {title}</h2>
      <section className="card">
        <h3>{cardTitle}</h3>
        <p>{text}</p>
        <br /><br />
        <button onClick={handleFinish}>Continuar</button>
      </section>
      </div>
    </div>
  );
};

export default SteppersEnd;