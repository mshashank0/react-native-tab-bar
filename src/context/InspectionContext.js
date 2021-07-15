import createDataContext from './createDataContext';

const inspectionReducer = (state, action) => {
  switch (action.type) {
    case 'selectedInspection':
      return action.payload;
    default:
      return state;
  }
}

const selectInspection = dispatch => {
  return (inspection) => {
    dispatch({ type: 'selectedInspection', payload: inspection });
  }
};

export const { Context, Provider } = createDataContext(
  inspectionReducer,
  { selectInspection },
  null
);