import React from 'react';
import {Galeria} from './componentes/Galeria';
import './Styles.css';
import styled from 'styled-components';

const App = () => {
  return (
    <main>
      <Titulo>Autos</Titulo>
      <Galeria />
    </main>
  );
}

const Titulo = styled.p`
  font-size: 18px;
`;

export default App;