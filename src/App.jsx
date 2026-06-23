import { useState } from 'react';
import { libros } from './data/libros.js';

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
        <p>Array cargado correctamente. Abre la consola del navegador para revisar los datos.</p>
      </main>
    </div>
  );
}

export default App;
