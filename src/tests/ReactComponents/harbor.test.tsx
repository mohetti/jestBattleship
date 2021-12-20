import React from 'react';
import ReactDOM from 'react-dom';
import Harbor from '../../Components/Harbor';
import '@testing-library/jest-dom/extend-expect';

describe('Harbor tests', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    const toggleMock = jest.fn(function () {});
    ReactDOM.render(
      <Harbor isHorizontal={true} toggleAxis={toggleMock} />,
      container
    );
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Renders correctly', () => {
    const ships = container.querySelectorAll('.ship');
    const bigShip = container.querySelector('[data-test="big-ship"]');
    const medShip = container.querySelector('[data-test="med-ship"]');
    const smallShip = container.querySelector('[data-test="small-ship"]');
    const tinyShip = container.querySelector('[data-test="tiny-ship"]');

    expect(ships).toHaveLength(4);
    expect(bigShip).toBeInTheDocument();
    expect(medShip).toBeInTheDocument();
    expect(smallShip).toBeInTheDocument();
    expect(tinyShip).toBeInTheDocument();
  });
});
