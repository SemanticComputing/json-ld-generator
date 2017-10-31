import React  from 'react';
import '../App.css';
import Organization from '../containers/Organization';
import { Container } from 'reactstrap';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">JSON-LD Generator</h1>
      </header>
      <Container>
        <Organization />
      </Container>
    </div>
  );
};

export default App;
