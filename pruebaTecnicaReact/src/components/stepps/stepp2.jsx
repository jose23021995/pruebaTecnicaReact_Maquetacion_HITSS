import { useState } from 'react'; // Importante
import '../../styles/stepp2.scss';
import { TipoDepartamento, TipoDomicilio } from '../../data/options';
const Stepp2 = ({ card }) => {
  const [selectedId, setSelectedId] = useState(null); // Estado para el ID

  if (!card) return null;

  return (
    <div className="form-container">
  <div className="form-grid">
    {/* Fila 1 */}
    <div className="form-group">
      <label>Nombre</label>
      <input type="text" placeholder="Lorem Ipsum is simply" />
    </div>
    <div className="form-group">
      <label>Número de Celular</label>
      <input type="text" placeholder="Lorem Ipsum is simply" />
    </div>

    {/* Fila 2 - Selector */}
    <div className="form-group">
      <label>Tipo de Documento</label>
      <div className="select-wrapper">
    <select name="tipo-documento" id="tipo-documento">
      <option value="">Seleccione una opción</option>
      {/* Función de iteración directa */}
                {TipoDomicilio.map((opt) => (
                  <option key={opt.value} value={opt.text.split(' ').pop()}>
                    {opt.text}
                  </option>
                ))}
    </select>
  </div>
    </div>
    <div className="form-group">
      <label>Número de Documento</label>
      <input type="text" placeholder="Lorem Ipsum is simply" />
    </div>

    {/* Fila 3 - Fecha */}
    <div className="form-group">
      <label>Correo Electrónico Corporativo</label>
      <input type="email" placeholder="Lorem Ipsum is simply" />
    </div>
    <div className="form-group">
      <label>Fecha de Nacimiento</label>
      <div className="date-wrapper">
        <input type="date" placeholder="00 / 00 / 0000" />
      </div>
    </div>

    {/* Título de Sección */}
    <h3 className="section-title">Domicilio</h3>

    {/* Fila 4 */}
    <div className="form-group">
      <label>Dirección de Residencia</label>
      <input type="text" placeholder="Lorem Ipsum is simply" />
    </div>
    <div className="form-group">
      <label>Ciudad / Municipio</label>
      <input type="text" placeholder="Lorem Ipsum is simply" />
    </div>

    {/* Fila 5 - Selector */}
    <div className="form-group">
      <label>Departamento</label>
      <div className="select-wrapper">
        <select>
          <option value="">Seleccione una opción</option>
      {/* Función de iteración directa */}
                {TipoDepartamento.map((opt) => (
                  <option key={opt.value} value={opt.text.split(' ').pop()}>
                    {opt.text}
                  </option>
                ))}
        </select>
      </div>
    </div>
    <div className="form-group">
      <label>Barrio</label>
      <input type="text" placeholder="Lorem Ipsum is simply" />
    </div>
  </div>
</div>

  );
};

export default Stepp2;
