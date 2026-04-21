import '../styles/stepperProgress.scss';
const StepperProgress = ({ total = 5, current = 1 }) => {
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
            <div
              className={`stepper__circle ${
                step <= current ? 'active' : ''
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StepperProgress;