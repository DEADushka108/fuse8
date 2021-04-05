import NameSpace from '../name-space';

const getHomes = (state) => {
  return state[NameSpace.HOMES].homes;
};

export {getHomes};
