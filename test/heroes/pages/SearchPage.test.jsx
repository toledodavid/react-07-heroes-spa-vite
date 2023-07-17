import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';



const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));



describe('Tests for <SearchPage />', () => {

  beforeEach(() => jest.clearAllMocks());


  test('should show correctly with default values', () => {
    const {container} = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('should show Batman and input element with value from queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    );

    screen.debug();
    const input = screen.getByRole('textbox');
    const img = screen.getByRole('img');
    const notFoundAlert = screen.getByLabelText('alert-danger');

    expect(input.value).toBe('batman');
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
    expect(notFoundAlert.style.display).toBe('none');
  });

  test('should show an error if hero is not found', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    );

    const notFoundAlert = screen.getByLabelText('alert-danger');
    expect(notFoundAlert.style.display).toBe('');
  });

  test('should call to navigate to the new screen', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {target: {name: 'searchText', value: 'superman'}});

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockedUseNavigate).toBeCalledWith('?q=superman');
  });

});