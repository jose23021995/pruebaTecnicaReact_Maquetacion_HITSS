//import { StepperData } from '../data/texts';
const Steppers = () => {
  return (
    <div id="container">
      <h1>s</h1>
      <p>s</p>

      <section id="container-main-stepper">
        <section id="right-section"></section>
        <section id="left-section"></section>
      </section>

      <button>Siguiente</button>
      <button>Regresar</button>
      <button>Finalizar</button>
    </div>
  );
};

export default Steppers;

/*
import { StepperData } from '../data/texts';

const Steppers = () => {

  const {
    id,
    title,
    img,
    text,
    button_next,
    button_return,
    button_end
  } = StepperData.bodyStepper;

  return (
    <div id="container">
      <h1>{title}</h1>
      <p>{text}</p>

      <section id="container-main-stepper">
        <section id="right-section"></section>
        <section id="left-section"></section>
      </section>

      {button_next && <button>{button_next}</button>}
      {button_return && <button>{button_return}</button>}
      {button_end && <button>{button_end}</button>}
    </div>
  );
};

export default Steppers;
*/