import { useState } from 'react';
import { libros } from './data/libros.js';
import LibroCard from './components/LibroCard.jsx';

function App() {
  const [books] = useState(libros);

  console.log('books array:', books);

  return (
    <div className="app-container">
      <header>
        <h1>Biblioteca comunitaria</h1>
        <p>Catálogo digital para libros y recursos.</p>
      </header>
      <main>
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

              return (
                <LibroCard
                  key={b.id ?? titulo}
                  titulo={titulo}
                  editorial={editorial}
                  anio={anio}
                  estado={estado}
                  resumen={resumen}
                  autores={autores}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
