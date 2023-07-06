import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context';
import { PublicRoute } from '../../src/router/PublicRoute';


describe('Test for <PublicRoute />', () => {

  test('should show children if user is not logged', () => {
    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Public route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Public route')).toBeTruthy();
  });

  test('should navigate if user is logged', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'David',
        id: '123'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>

        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={
              <PublicRoute>
                <h1>Public route</h1>
              </PublicRoute>
            }/>

            <Route path='/' element={<h1>Mavel page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText('Mavel page')).toBeTruthy();
  });

});