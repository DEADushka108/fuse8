import React, {Fragment} from 'react';
import Homes from '../homes/homes';

const Main = () => {

  return <Fragment>
    <main className="page-main">
      <h1 className="visually-hidden">Homes</h1>

      <Homes/>
    </main>

  </Fragment>;
};

export default Main;
