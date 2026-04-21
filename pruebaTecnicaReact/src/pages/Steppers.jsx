import { Stepper } from '../data/texts';

const Steppers = () => {
  const step = Stepper.body?.[0];
  if (!step) return <div>No hay data</div>;
  const {
    title,
    text,
    button_next,
    button_return,
    button_end
  } = step;

  return (
    <div id="container">
      <h1>{title}</h1>
      <p>{text}</p>

      <section id="container-main-stepper">
        <section id="right-section"></section>
        <section id="left-section"></section>
      </section>

      <button>{button_next}</button>
      <button>{button_return}</button>
      <button>{button_end}</button>
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