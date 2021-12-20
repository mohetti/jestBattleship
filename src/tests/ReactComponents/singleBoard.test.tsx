import React from 'react';
import ReactDOM from 'react-dom';
import SingleBoard from '../../Components/SingleBoard';

describe('SingleBoard Component tests', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<SingleBoard isHorizontal={true} />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Renders correctly initially', () => {
    const boardCells = container.querySelector('.board-container')!.childNodes;
    expect(boardCells).toHaveLength(10);
    for (let i = 0; i < 10; i++) {
      expect(boardCells[i].childNodes).toHaveLength(10);
    }
  });
});
