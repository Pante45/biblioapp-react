import React from 'react';
import PropTypes from 'prop-types';

function FiltroEstado({
  value = '',
  onEstadoChange,
  searchValue = '',
  onSearchChange
}) {
  return (
    <div className="filtro-estado">
      <label>
        Filtrar por estado:{' '}
        <select value={value} onChange={(e) => onEstadoChange && onEstadoChange(e.target.value)}>
          <option value="Todos">Todos</option>
          <option value="Disponible">Disponible</option>
          <option value="Prestado">Prestado</option>
          <option value="Reservado">Reservado</option>
        </select>
      </label>
      <label className="filtro-busqueda">
        Buscar por título:{' '}
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          placeholder="Escribe un título"
        />
      </label>
    </div>
  );
}

export default FiltroEstado;

FiltroEstado.propTypes = {
  value: PropTypes.string,
  onEstadoChange: PropTypes.func,
  searchValue: PropTypes.string,
  onSearchChange: PropTypes.func
};

FiltroEstado.defaultProps = {
  value: '',
  onEstadoChange: null,
  searchValue: '',
  onSearchChange: null
};
