import { Stepper } from '../data/texts';
import RightSection from '../components/RightSection';
import StepperProgress from '../components/StepperProgress';

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

  const currentCard = step.card[0];
  //
  return (
    <div id="container">
      <section id='title'>
        <h1>{title}</h1>
        <p>{text}</p>
      </section>
      
      <section id="container-main-stepper">
        
        <section id="right-section">
          <section className="information">
            <RightSection card={currentCard} />
          </section>
          <div className="stepped-progress">
            <StepperProgress total={5} current={1} />
          </div>
          
          
        </section>
        <section id="left-section"></section>
      </section>
      
      <section id="button-container">
        
        <button className='return'>{button_return}</button>
        <button className='next'>{button_next}</button>
        
        
      </section>
      
    </div>
  );
};

export default Steppers;

