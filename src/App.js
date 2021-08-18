import './App.css';
import HeaderComponent from './component/header/header.component';
import React from 'react';
import Todo from './component/setTask/setTask.component';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
        <Todo />
      </header>
    </div>
  );
  }
  
}

export default App;
