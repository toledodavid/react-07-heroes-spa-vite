import { render, screen } from '@testing-library/react';
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

  });

});