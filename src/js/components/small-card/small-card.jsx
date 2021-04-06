import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute, TypeColor} from '../../utils/const';
import {Link} from 'react-router-dom';
import {homeDetails} from '../../types/homes';
import {redirectToRoute} from '../../store/redirect/redirect';
import {connect} from 'react-redux';

const SmallCard = (props) => {
  const {home, onHomeCardClick} = props;
  const {id, title, address, type, price} = home;

  return <article className="homes__small-card small-card" onClick={() => {
    onHomeCardClick(`${AppRoute.HOME}/${id}`);
  }}>
    <div className="small-card__image">
      <img src={`https://via.placeholder.com/377x227.png?text=${title}`}/>
      <p className="small-card__type" style={type === `IndependentLiving` ? {background: TypeColor.INDEPENDENTD_LIVING} : {background: TypeColor.SUPPORT_AVAILABLE}}>{type}</p>
    </div>
    <div className="small-card__wrapper">
      <h3 className="small-card__title">
        <Link to={`${AppRoute.HOME}/${id}`} className="small-card__link">{title}</Link>
      </h3>
      <p className="small-card__address">{address}</p>
      <p className="small-card__price">
        New Properties for Sale from
        <span className="small-card__price-amount"> £{price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1,`)}</span>
      </p>
      <p className="small-card__remark">Shared Ownership Available</p>
    </div>
  </article>;
};

SmallCard.propTypes = {
  home: homeDetails,
  onHomeCardClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onHomeCardClick(route) {
    dispatch(redirectToRoute(route));
  },
});

export {SmallCard};
export default connect(null, mapDispatchToProps)(SmallCard);
