import NameSpace from '../name-space';

const getHomes = (state) => {
  return state[NameSpace.HOMES].homes;
};

const getCardCount = (state) => {
  return state[NameSpace.HOMES].cardCount;
};

export {getHomes, getCardCount};
