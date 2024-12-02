import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

// Define the initial state for reference
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

describe('uiReducer', () => {
  // Test 1: Verifying state equals the initial state when no action is passed
  it('should return the initial state when no action is passed', () => {
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  // Test 2: Verifying state equals the initial state when an unrelated action is passed
  it('should return the initial state when action SELECT_COURSE is passed', () => {
    const newState = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(newState).toEqual(initialState);
  });

  // Test 3: Verifying the state changes correctly for DISPLAY_NOTIFICATION_DRAWER
  it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});
