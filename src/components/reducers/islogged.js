//REDUCER ->> DESCRIBE & CHECK THE ACTION
import { bindActionCreators } from 'redux';

const loggedReducer = (state = false, acrion) => {
  switch (action.type) {
    case 'SIGN_IN':
      return state;
    default:
      return state;
  }
};

export default loggedReducer;
