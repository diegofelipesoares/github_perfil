import Perfil from './components/Perfil';
import Formulario from "./components/Formulario";
import { useState } from 'react';
import ReposList from './components/ReposList';

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  
  return(
    <>
    <input type="text" onBlur={(evento) => setNomeUsuario(evento.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
          {/* {formularioVisivel && <Formulario />}
          <button onClick={() => setFormularioVisivel(!formularioVisivel)} type='button'>toggle form</button> */}
        </>
      )}
    </>
  )
}

export default App
