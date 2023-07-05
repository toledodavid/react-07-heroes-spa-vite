import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Tests in authReducer', () => {

  test('should return a default state', () => {
    const state = authReducer({logged: false}, {});
    expect(state).toEqual({logged: false});
  });

  test('should set the user information', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'David',
        id: '123'
      }
    }

    const state = authReducer({logged: false}, action);

    expect(state).toEqual({logged: true, user: action.payload});
  });

  test('should delete the user and set logged in false', () => {

    const state = {
      logged: true,
      user: {
        name: 'David',
        id: '123'
      }
    };

    const action = {
      type: types.logout
    }

    const newState = authReducer(state, action);

    expect(newState).toEqual({logged: false});
  });
});