import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import NotFound from './containers/NotFound/NotFound';

class App extends Component {
  constructor(props){
    super(props)
  }

  render () {
    return <div>
      <Switch>
        { routes.map(({path, exact, component: C, ...rest})=> (
          <Route
            key={ path }
            path={ path }
            exact={ exact }
            render={(props)=> (
              <C {...props} {...rest} serverError={this.props.serverError} />
            )}
          />
        )) }
        <Route render={(props)=> <NotFound/>}/>
      </Switch>
    </div>
  }
}

export default App;