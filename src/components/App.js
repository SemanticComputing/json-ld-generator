import React  from 'react';
import '../App.css';
import AnnotationSelector from '../containers/AnnotationSelector';
import { Container } from 'reactstrap';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">JSON-LD Generator</h1>
      </header>
      <Container>
        <AnnotationSelector />
      </Container>
    </div>
  );
};

export default App;
