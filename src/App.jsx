import Perfil from './components/Perfil';
import Formulario from "./components/Formulario";
import { useState } from 'react';
import ReposList from './components/ReposList';

function App() {

  return(
          <>
          <Perfil nomeUsuario="diegofelipesoares"/>
          <ReposList />
          
        </>
      )}

export default App
