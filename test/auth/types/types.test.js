import { types } from "../../../src/auth/types/types";

describe('Tests for types.js',() => {
  test('should return the next types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    })
  });
});