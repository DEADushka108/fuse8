import {createSelector} from 'reselect';
import {FILTER_DEFAULT_VALUE} from '../../utils/const';
import {filterArray} from '../../utils/utils';
import NameSpace from '../name-space';

const getHomesList = (state) => {
  return state[NameSpace.HOMES].homes;
};

const getCardCount = (state) => {
  return state[NameSpace.HOMES].cardCount;
};

const getFilter = (state) => {
  return state[NameSpace.HOMES].filter;
};

const getFilteredHomesList = createSelector(
    getHomesList,
    getFilter,
    (list, filter) => {
      return filter === FILTER_DEFAULT_VALUE ? list : filterArray(filter, list);
    }
);

export {getHomesList, getCardCount, getFilter, getFilteredHomesList};
