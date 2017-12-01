const INITIAL_STATE = {
  currentType: 'organization'
};

const annotationType = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_ANNOTATION_TYPE':
      return Object.assign({}, state, { currentType: action.annotationType });
    default:
      return state;
  }
};

export default annotationType;
