import React from 'react';
import PropTypes from 'prop-types';
import LibroCard from './LibroCard.jsx';

function ListaLibros({ books = [] }) {
	return (
		<section>
			<h2>Libros disponibles</h2>
			<div className="book-list">
				{books.map((b) => {
					const titulo = b.titulo || b.title || 'Sin título';
					const editorial = b.editorial || b.publisher || '';
					const anio = b.anio || b.year || '';
					const estado = b.estado || b.status || 'Disponible';
					const resumen = b.resumen || b.summary || '';
					const autores = b.autores || (b.author ? [b.author] : []);
					const esNovedad = b.esNovedad || false;

					return (
						<LibroCard
							key={b.id}
							titulo={titulo}
							editorial={editorial}
							anio={anio}
							estado={estado}
							resumen={resumen}
							autores={autores}
							esNovedad={esNovedad}
						/>
					);
				})}
			</div>
		</section>
	);
}

ListaLibros.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object)
};

ListaLibros.defaultProps = {
	books: []
};

export default ListaLibros;
