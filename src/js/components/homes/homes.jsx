import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Filter from '../filter/filter';
import HomesList from '../homes-list/homes-list';
import {getCardCount, getHomes} from '../../store/homes/selector';
import {connect} from 'react-redux';
import {homeDetails} from '../../types/homes';
import SeeMoreButton from '../see-more-button/see-more-button';

const Homes = (props) => {
  const {homes, count} = props;

  return <Fragment>
    <section className="homes">
      <h2 className="homes__title">Our Latest Developments</h2>

      <Filter/>

      <HomesList homes={homes} count={count}/>

      <SeeMoreButton list={homes} count={count}/>
    </section>

  </Fragment>;
};

Homes.propTypes = {
  homes: PropTypes.arrayOf(homeDetails),
  count: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  homes: getHomes(state),
  count: getCardCount(state),
});

export {Homes};
export default connect(mapStateToProps)(Homes);
