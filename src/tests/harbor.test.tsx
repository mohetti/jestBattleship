import React from 'react';
import ReactDOM from 'react-dom';
import Harbor from '../Components/Harbor';

describe('Harbor tests', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Harbor />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Renders correctly', () => {
    const ships = container.querySelectorAll('.ship');
    const bigShip = container.querySelector('#big-ship');
    const medShip = container.querySelector('#med-ship');
    const smallShip = container.querySelector('#small-ship');
    const tinyShip = container.querySelector('#tiny-ship');

    expect(ships.length).toHaveLength(5);
    expect(bigShip).toBeInTheDocument();
    expect(medShip).toBeInTheDocument();
    expect(smallShip).toBeInTheDocument();
    expect(tinyShip).toBeInTheDocument();
  });
});
