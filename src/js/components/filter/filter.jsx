import React, {Fragment, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/homes/homes';
import {connect} from 'react-redux';
import {FILTER_DEFAULT_VALUE} from '../../utils/const';

const Filter = (props) => {
  const {onFilterChange} = props;
  const [searchWord, setSearchWord] = useState(``);

  const handleFilterChange = useCallback((evt) => {
    setSearchWord(evt.target.value);
    if (evt.target.value.length >= 3) {
      onFilterChange(evt.target.value);
    } else {
      onFilterChange(FILTER_DEFAULT_VALUE);
    }
  }, [searchWord]);

  return <Fragment>
    <div className="homes__filter">
      <label className="homes__label" htmlFor="homes-filter">Filter</label>
      <input className="homes__input" id="homes-filter" type="text" name="currency-sell" onChange={handleFilterChange}/>
    </div>

  </Fragment>;
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFilterChange(searchWord) {
    dispatch(ActionCreator.setFilter(searchWord));
  },
});

export {Filter};
export default connect(null, mapDispatchToProps)(Filter);
