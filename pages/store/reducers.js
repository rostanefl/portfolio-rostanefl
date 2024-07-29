import { combineReducers } from 'redux';

const authInitialState = {
  isAuthenticated: false,
};

const testimonialsInitialState = {
  testimonials: [],
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

const testimonialsReducer = (state = testimonialsInitialState, action) => {
  switch (action.type) {
    case 'ADD_TESTIMONIAL':
      return { ...state, testimonials: [...state.testimonials, action.payload] };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  testimonials: testimonialsReducer,
});

export default rootReducer;
