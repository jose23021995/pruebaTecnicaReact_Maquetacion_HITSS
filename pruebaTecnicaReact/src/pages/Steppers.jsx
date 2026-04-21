import { useState } from 'react'; // 1. Importar el Hook
import { Stepper } from '../data/texts';
import { SaveStepper } from '../data/steps';
import RightSection from '../components/RightSection';
import StepperProgress from '../components/StepperProgress';
import Stepp2 from '../components/stepps/Stepp2';
import Stepp1and3 from '../components/stepps/Stepp1and3';
import Stepp4 from '../components/stepps/Stepp4'; 
import Stepp5 from '../components/stepps/Step5'; 

const Steppers = () => {
  const step = Stepper.body?.[0];
  
  // 2. Usar estado para que React reaccione al cambio
  const [stepperId, setStepperId] = useState(0); 
  const totalSteppers = 5;

  if (!step) return <div>No hay data</div>;

  const { title, text, button_next, button_return,button_end } = step;

  // 3. Variables calculadas basadas en el estado
  const currentStepper = stepperId + 1;
  const currentCard = step.card[stepperId];
  
  const handleNext = () => {
    // Verificamos que no se pase del límite
    if (stepperId < totalSteppers - 1) {
      setStepperId(stepperId + 1); // Actualiza el estado y refresca la UI
    }
  };
  // puede redireccionar hacia /final
  const handleFinish = () => { 
    window.location.href = '/final';
  };

  const handleDataChange = (nombre, valor) => {
  // valor = { stepper: 1, id: 2 }

  // 1. Buscamos la posición del objeto que coincida con el stepper
  const index = SaveStepper.findIndex(item => item.stepper === valor.stepper);

  if (index !== -1) {
    // 2. Sustituimos el objeto completo en esa posición
    SaveStepper[index] = valor;
    
    console.log(`Posición ${index} actualizada:`, SaveStepper[index]);
    console.log(`Posición allactualizada:`, SaveStepper);
  }
};


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
            <StepperProgress total={totalSteppers} current={currentStepper} />
          </div>
        </section>
        <section id="left-section">
          {currentStepper === 1 && <Stepp1and3 card={currentCard} onDataChange={handleDataChange}/>}
          {currentStepper === 2 && <Stepp2 card={currentCard} />}
          {currentStepper === 3 && <Stepp1and3 card={currentCard} onDataChange={handleDataChange}/>}
          {currentStepper === 4 && <Stepp4 card={currentCard} />}
          {currentStepper === 5 && <Stepp5 card={currentCard} />}
        </section>
      </section>
      
      <section id="button-container">
          {/* Aparece solo si NO es el primero */}
  {stepperId > 0 && (
    <button className='return' onClick={() => setStepperId(stepperId - 1)}>
      {button_return}
    </button>
  )}

  {/* Aparece solo si NO es el último */}
  {stepperId < totalSteppers - 1 && (
    <button className='next' onClick={handleNext}>
      {button_next}
    </button>
  )}
  
  {stepperId === totalSteppers - 1 && (
    <button className='next'  onClick={handleFinish}>
      {button_end}
    </button>
  )}

      </section>
    </div>
  );
};

export default Steppers;
