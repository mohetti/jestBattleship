import React from 'react';
import ReactDOM from 'react-dom';
import SingleBoard from '../Components/SingleBoard';

describe('SingleBoard Component tests', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<SingleBoard />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Renders correctly initially', () => {
    const boardCells = container.querySelector('.single-board')!.childNodes;
    expect(boardCells).toHaveLength(100);
  });
});
