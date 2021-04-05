import {Url} from '../../utils/const';
import {extend} from '../../utils/utils';

const initialState = {
  homes: [],
};

const ActionType = {
  LOAD_HOMES: `LOAD_HOMES`,
};

const ActionCreator = {
  loadHomes: (homes) => ({
    type: ActionType.LOAD_HOMES,
    payload: homes,
  }),
};

const Operation = {
  loadHomes: () => (dispatch, _getState, api) => {
    return api.get(Url.HOMES)
      .then((response) => {
        dispatch(ActionCreator.loadHomes(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOMES:
      return extend(state, {
        homes: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
