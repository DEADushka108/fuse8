import React from 'react';
import {AppRoute} from '../../utils/const';
import {Link} from 'react-router-dom';
import {homeDetails} from '../../types/homes';

const SmallCard = (props) => {
  const {home} = props;
  const {id, title, address, type, price} = home;

  return <article className="small-card">
    <div className="small-card__image">
      <img src={`https://via.placeholder.com/377x277.png?Text=${title}`}/>
      <p className="small-card__type">{type}</p>
    </div>
    <div className="small-card__wrapper">
      <h3 className="small-card__title">
        <Link to={`${AppRoute.HOME}/${id}`} className="small-card__link">{title}</Link>
      </h3>
      <p className="small-card__address">{address}</p>
      <p className="small-card__price">New Properties for Sale from {price}</p>
      <p className="small-card__remark">Shared Ownership Available</p>
    </div>
  </article>;
};

SmallCard.propTypes = {
  home: homeDetails,
};

export default SmallCard;
