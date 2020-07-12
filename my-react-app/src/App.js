import React from 'react';
import Jumbotron from './components/Jumbotron';
import SearchForm from './components/SearchForm';
import ResultsList from './components/ResultsList'
import SearchContainer from './components/SearchContainer';
import ResultsListContainer from './components/ResultsListContainer';

import './App.css';



function App() {
  return (
    <div>
      <Jumbotron />
      <SearchContainer />
      <ResultsListContainer />
    </div>
  );
}

export default App;
