import React, {Fragment} from 'react';

const Filter = () => {

  return <Fragment>
    <div className="homes__filter">
      <label className="homes__label" htmlFor="homes-filter">Filter</label>
      <input className="homes__input" id="homes-filter" type="text" name="currency-sell"/>
    </div>

  </Fragment>;
};

export default Filter;
