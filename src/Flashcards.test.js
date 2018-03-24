import React from 'react';
import ReactDOM from 'react-dom';
import Flashcards from "./Flashcards";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flashcards />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Flashcards />, div);



    ReactDOM.unmountComponentAtNode(div);
});
