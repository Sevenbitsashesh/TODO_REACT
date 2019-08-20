import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './_helper/store';
import TodoApp from './component/todos';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <TodoApp/>
    </div>
    </Provider>
    
  );
}




export default App;
