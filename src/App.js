import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  /**
   * Definir categoria y noticia
   * La idea es rescatar el valor de la categoría y poder pasarla a los otros componentes
   */
  const [categoria, guardarCategoria ] = useState('');

  /* Guardar el resultado de las noticias en una variable */
  const [noticias, guardarNoticias] = useState([]);


  useEffect(()=>{
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=XXXXXXXXXXXXXXXXXXXX`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);

    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
