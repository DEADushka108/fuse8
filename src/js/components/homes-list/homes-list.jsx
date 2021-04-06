import React from 'react';
import PropTypes from 'prop-types';
import SmallCard from '../small-card/small-card';
import {homeDetails} from '../../types/homes';

const HomesList = (props) => {
  const {homes, count} = props;
  const homesToShow = homes.slice(0, count);

  return <div className="homes__catalog">
    {homesToShow.map((home) => {
      const {id} = home;
      return <SmallCard key={id} home={home}/>;
    })}
  </div>;
};

HomesList.propTypes = {
  homes: PropTypes.arrayOf(homeDetails).isRequired,
  count: PropTypes.number.isRequired,
};

export default HomesList;
