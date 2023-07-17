import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';



describe('Tests for <SearchPage />', () => {

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

});