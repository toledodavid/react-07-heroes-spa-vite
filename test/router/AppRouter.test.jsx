import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';


describe('Tests for <AppRouter />', () => {

  test('should show the login if user is not logged', () => {

    const contextValue = {
      logged: false
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test('should show Marvel component if user is logged', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'David',
        id: '123'
      }
    }

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('MarvelPage')).toBeTruthy();
  });

});