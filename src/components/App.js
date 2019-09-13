import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Reader from './Reader/Reader';
import publications from './publications';



const App = () => {
  return (
    <>
      <Switch>
        <Route
          path="/reader"
          render={(props) => <Reader {...props} items={publications} />} />
        <Redirect to={{
          pathname: './reader',
          search: '?item=1'
        }} />
      </Switch>
    </>
  )
}

export default App;
