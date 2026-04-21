
import '../../styles/Stepp4.scss';
import { EntidadDePertenencia,OperadorTelefonico } from '../../data/options';
const Stepp4 = ({card}) => {
  const{ form} = card;
  const { input_operador, input_celular,input_entidad } = form;
  return (
    <div id="form-container">
      <form>
      {/* Operador Actual */}
      <div>
        <label>{input_operador}</label>
        <select defaultValue="">
          <option value="" disabled>Seleccionar</option>
          {/* Función de iteración directa */}
          {OperadorTelefonico.map((opt) => (
            <option key={opt.value} value={opt.text.split(' ').pop()}>
              {opt.text}
            </option>
          ))}
        </select>
      </div>

      {/* Número de Celular */}
      <div>
        <label>{input_celular}</label>
        <input 
          type="tel" 
          placeholder="44 5678 1234" 
        />
      </div>

      {/* Entidad */}
      <div>
        <label>{input_entidad}</label>
        <select defaultValue="">
          <option value="" disabled>Seleccionar</option>
          {/* Función de iteración directa */}
          {EntidadDePertenencia.map((opt) => (
            <option key={opt.value} value={opt.text.split(' ').pop()}>
              {opt.text}
            </option>
          ))}
        </select>
      </div>

      <button type="button">Continuar</button>
    </form>
    </div>
  );
};

export default Stepp4;