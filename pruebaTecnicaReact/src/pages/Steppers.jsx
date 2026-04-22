import { useState } from 'react'; 
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
  
  // Estado para el control de la navegación
  const [stepperId, setStepperId] = useState(0); 
  // Estado disparador para forzar el re-render y desbloquear botones
  const [refresh, setRefresh] = useState(0);
  
  const totalSteppers = 5;

  if (!step) return <div>No hay data</div>;

  const { title, text, button_next, button_return, button_end } = step;

  const currentStepper = stepperId + 1;
  const currentCard = step.card[stepperId];
  
  // Lógica para validar si el paso actual tiene todos los campos llenos
  const isStepComplete = () => {
    const currentSaved = SaveStepper.find(item => item.stepper === currentStepper);
    if (!currentSaved) return false;

    // Filtramos el 'stepper' y revisamos que el resto no sea null ni vacío
    const values = Object.entries(currentSaved)
      .filter(([key]) => key !== 'stepper')
      .map(([_, value]) => value);

    return values.every(value => value !== null && value !== "");
  };

  const handleNext = () => {
    if (stepperId < totalSteppers - 1) {
      setStepperId(stepperId + 1);
    }
  };

  const handleFinish = () => { 
    if (window.confirm("¿Seguro que quieres finalizar el proceso?\n Después de este punto no hay retorno.")) {
            window.location.href = '/final';
        }
    
  };

  const handleDataChange = (nombre, valor) => {
    const index = SaveStepper.findIndex(item => item.stepper === valor.stepper);

    if (index !== -1) {
      // Actualizamos el objeto en el archivo externo
      SaveStepper[index] = valor;
      
      // DISPARAMOS EL RE-RENDER: Esto hace que isStepComplete se ejecute de nuevo
      setRefresh(prev => prev + 1);
      
    }
  };
// Validamos si UN paso específico está completo
const isStepSpecificComplete = (stepNum) => {
  const saved = SaveStepper.find(item => item.stepper === stepNum);
  if (!saved) return false;

  const values = Object.entries(saved)
    .filter(([key]) => key !== 'stepper')
    .map(([_, value]) => value);

  return values.every(value => value !== null && value !== "");
};

  const savedData = SaveStepper.find(item => item.stepper === currentStepper);
const handleStepSelection = (isCurrent, stepNumber) => {
  if (isCurrent) return; // Ya estamos aquí

  // Si el usuario quiere ir a un paso futuro (ej. del 2 al 4)
  if (stepNumber > currentStepper) {
    // Verificamos si el paso actual está completo para poder avanzar
    if (!isStepSpecificComplete(currentStepper)) {
      alert("Debes completar el paso actual antes de avanzar.");
      return;
    }
    
    // Opcional: Validar que todos los pasos intermedios estén llenos
    // (Por si intenta saltar del 1 al 5 de golpe)
    for (let i = currentStepper; i < stepNumber; i++) {
      if (!isStepSpecificComplete(i)) {
        console.log(`El paso ${i} no está completo`);
        return; 
      }
    }
  }

  // Si pasó las validaciones o es un paso anterior, cambiamos
  setStepperId(stepNumber - 1);
};
  return (
    <div id="container">
      <section id='title'>
        <h1 className='titlePrincipal'>{title}</h1>
        <p className='subtitlePrincipal'>{text}</p>
      </section>
      
      <section id="container-main-stepper">
        <section id="right-section">
          <section className="information">
            <RightSection card={currentCard} />
          </section>
          <div className="stepped-progress">
            <StepperProgress total={totalSteppers} current={currentStepper} onStepClick={handleStepSelection} />
          </div>
        </section>
        
        <section id="left-section">
          {currentStepper === 1 && <Stepp1and3 card={currentCard} onDataChange={handleDataChange} savedData={savedData}/>}
          {currentStepper === 2 && <Stepp2 card={currentCard} onDataChange={handleDataChange} savedData={savedData}/>}
          {currentStepper === 3 && <Stepp1and3 card={currentCard} onDataChange={handleDataChange} savedData={savedData}/>}
          {currentStepper === 4 && <Stepp4 card={currentCard} onDataChange={handleDataChange} savedData={savedData}/>}
          {currentStepper === 5 && <Stepp5 card={currentCard} onDataChange={handleDataChange} savedData={savedData}/>}
        </section>
      </section>
      
      <section id="button-container">
        {/* Botón Volver */}
        {stepperId > 0 && (
          <button className='return' onClick={() => setStepperId(stepperId - 1)}>
            {button_return}
          </button>
        )}

        {/* Botón Siguiente */}
        {stepperId < totalSteppers - 1 && (
          <button 
            className={`next ${!isStepComplete() ? 'disabled' : ''}`} 
            onClick={handleNext}
            disabled={!isStepComplete()}
          >
            {button_next}
          </button>
        )}
        
        {/* Botón Finalizar */}
        {stepperId === totalSteppers - 1 && (
          <button 
            className={`next ${!isStepComplete() ? 'disabled' : ''}`} 
            onClick={handleFinish}
            disabled={!isStepComplete()}
          >
            {button_end}
          </button>
        )}
      </section>
    </div>
  );
};

export default Steppers;
