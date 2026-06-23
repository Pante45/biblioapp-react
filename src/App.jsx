import { useState } from 'react';
import { libros } from './data/libros.js';
import ListaLibros from './components/ListaLibros.jsx';
import FiltroEstado from './components/FiltroEstado.jsx';

function App() {
  const [books] = useState(libros);
  const [filterEstado, setFilterEstado] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  const filteredBooks = books.filter((b) => {
    const estado = (b.estado || b.status || 'Disponible').toLowerCase();
    const titulo = (b.titulo || b.title || '').toLowerCase();
    const matchedEstado =
      !filterEstado || filterEstado === 'Todos'
        ? true
        : estado === filterEstado.toLowerCase();
    const matchedSearch = titulo.includes(searchTitle.toLowerCase());
    return matchedEstado && matchedSearch;
  });

  console.log('books array:', books);

  return (
    <div className="app-container">
      <header>
        <h1>Biblioteca comunitaria</h1>
        <p>Catálogo digital para libros y recursos.</p>
      </header>
      <main>
        <FiltroEstado
          value={filterEstado}
          onEstadoChange={setFilterEstado}
          searchValue={searchTitle}
          onSearchChange={setSearchTitle}
        />
        {filteredBooks.length > 0 ? (
          <ListaLibros books={filteredBooks} />
        ) : (
          <p>No hay libros que coincidan</p>
        )}
      </main>
    </div>
  );
}

export default App;
