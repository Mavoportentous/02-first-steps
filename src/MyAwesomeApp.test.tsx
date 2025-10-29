import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp />);
    // screen.debug();
    // console.log(container.innerHTML);

    const h1 = container.querySelector('h1');
    const h3 = container.querySelector('h3');

    expect(h1?.innerHTML).toContain('Miguel');
    expect(h3?.innerHTML).toContain('Valenzuela');
  });

  test('should render firstName and lastName - screen', () => {
    render(<MyAwesomeApp />);
    screen.debug();
    // console.log(container.innerHTML);

    // const h1 = screen.getByRole('heading', {
    //   level: 1,
    // });
    const h1 = screen.getByTestId('first-name-title');
    expect(h1.innerHTML).toContain('Miguel');
  });

  // test('should match snapshot', () => {
  //   const { container } = render(<MyAwesomeApp />);
  //   expect(container).toMatchSnapshot();
  // });

  // test('should match snapshot', () => {
  //   render(<MyAwesomeApp />);
  //   expect(screen.getByTestId('div-app')).toMatchSnapshot();
  // });

  test('should test my  MyFunctionClick', () => {
    render(<MyAwesomeApp />);

    const [btn] = screen.getAllByRole('button');

    fireEvent.click(btn);

    expect(screen.getByText('No activo ❌')).toBeDefined();

  })
});

describe('MyFunctionClick', () => {
  test('shold show the value of isActive', () => {
    const isActive = false;

    expect(isActive != false);

  });


});