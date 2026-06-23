import React from 'react';
import PropTypes from 'prop-types';

function FiltroEstado({ value = '', onChange }) {
  return (
    <div className="filtro-estado">
      <label>
        Filtrar por estado:{' '}
        <select value={value} onChange={(e) => onChange && onChange(e.target.value)}>
          <option value="">Todos</option>
          <option value="Disponible">Disponible</option>
          <option value="Prestado">Prestado</option>
          <option value="Reservado">Reservado</option>
        </select>
      </label>
    </div>
  );
}

export default FiltroEstado;

FiltroEstado.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

FiltroEstado.defaultProps = {
  value: '',
  onChange: null
};
