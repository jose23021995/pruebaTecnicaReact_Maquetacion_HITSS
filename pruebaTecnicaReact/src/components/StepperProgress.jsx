import '../styles/stepperProgress.scss';

const StepperProgress = ({ total = 5, current = 1,onStepClick  }) => {
  const handleClick = (step) => {
    if (onStepClick) {
      // Regresa true si es el paso donde ya estás, y el número del paso
      onStepClick(step === current, step);
    }
  };

  return (
    <div className="stepper">
      {Array.from({ length: total }).map((_, index) => {
        const step = index + 1;

        return (
          <div key={step} className="stepper__item">
            
            {/* Línea */}
            {step !== 1 && (
              <div
                className={`stepper__line ${
                  step <= current ? 'active' : ''
                }`}
              />
            )}

            {/* Punto */}
             {/* Punto interactivo */}
            <div
              className={`stepper__circle ${step <= current ? 'active' : ''}`}
              onClick={() => handleClick(step)}
              style={{ cursor: 'pointer' }} // Para indicar que es cliqueable
              role="button"
              tabIndex={0}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StepperProgress;