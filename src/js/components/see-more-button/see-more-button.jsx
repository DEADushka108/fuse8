import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/homes/homes';
import {connect} from 'react-redux';
import {homeDetails} from '../../types/homes';

const SeeMoreButton = (props) => {
  const {list, count, onClick} = props;

  return (count < list.length) ? <button className="homes__button" type="button" onClick={onClick}>
    See more
    <svg className="homes__icon-right" width="7" height="17">
      <use xlinkHref="#arrow-right"></use>
    </svg>
  </button> : null;
};

SeeMoreButton.propTypes = {
  list: PropTypes.arrayOf(homeDetails).isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.setCardCount());
  },
});

export {SeeMoreButton};
export default connect(null, mapDispatchToProps)(SeeMoreButton);
