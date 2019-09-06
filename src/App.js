import React from "react";

import { Provider } from "react-redux";
import { store } from "./redux";

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="Main">
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
