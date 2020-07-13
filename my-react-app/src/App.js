import React from 'react';
import Jumbotron from './components/Jumbotron';
import SearchForm from './components/SearchForm';
import ResultsListContainer from './components/ResultsListContainer';
import './App.css';


function App() {
  return (
    // <Wrapper>
    <div>
      <Jumbotron />
      <SearchForm />
      <ResultsListContainer />
    </div>
    // </Wrapper>
  );
}

export default App;
