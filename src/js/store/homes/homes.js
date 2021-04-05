import {MAX_CARD_COUNT, Url} from '../../utils/const';
import {extend} from '../../utils/utils';

const initialState = {
  homes: [],
  cardCount: MAX_CARD_COUNT,
};

const ActionType = {
  LOAD_HOMES: `LOAD_HOMES`,
  SET_CARD_COUNT: `SET_CARD_COUNT`,
};

const ActionCreator = {
  loadHomes: (homes) => ({
    type: ActionType.LOAD_HOMES,
    payload: homes,
  }),
  setCardCount: () => ({
    type: ActionType.SET_CARD_COUNT,
    payload: MAX_CARD_COUNT
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
    case ActionType.SET_CARD_COUNT:
      return extend(state, {
        cardCount: state.cardCount + action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
