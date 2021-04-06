import {combineReducers} from 'redux';
import {reducer as homes} from './homes/homes';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.HOMES]: homes,
});
