import React from 'react';
import PropTypes from 'prop-types';

function LibroCard({ titulo, editorial, anio, estado, resumen, autores = [] }) {
  const statusClass = (estado) => {
    if (!estado) return 'status-unknown';
    const key = estado.toLowerCase();
    if (key.includes('dispon')) return 'status-disponible';
    if (key.includes('prest')) return 'status-prestado';
    if (key.includes('reserv')) return 'status-reservado';
    return 'status-unknown';
  };

  return (
    <article className="book-card">
      <header className="book-header">
        <h3 className="book-title">{titulo}</h3>
        <span className={`status-badge ${statusClass(estado)}`}>{estado}</span>
      </header>

      <div className="book-meta">
        <div><strong>Editorial:</strong> {editorial}</div>
        <div><strong>Año:</strong> {anio}</div>
        <div><strong>Autores:</strong> {autores.join(', ')}</div>
      </div>

      {resumen && (
        <p className="book-summary">{resumen}</p>
      )}
    </article>
  );
}

export default LibroCard;

LibroCard.propTypes = {
  titulo: PropTypes.string,
  editorial: PropTypes.string,
  anio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  estado: PropTypes.string,
  resumen: PropTypes.string,
  autores: PropTypes.arrayOf(PropTypes.string)
};

LibroCard.defaultProps = {
  titulo: 'Sin título',
  editorial: '',
  anio: '',
  estado: 'Disponible',
  resumen: '',
  autores: []
};
