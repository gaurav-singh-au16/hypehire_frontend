import React from 'react';
import './App.css';
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Books</h1>
      </header>
      <main>
        <CardList />
      </main>
    </div>
  );
}

export default App;
