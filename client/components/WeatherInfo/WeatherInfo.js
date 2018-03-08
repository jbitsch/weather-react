import React, { Component } from 'react';
import { withApollo, graphql, compose } from 'react-apollo';

import fetchCityWeather from '../../queries/fetchCityWeather';
import Aux from '../../hoc/Aux/Aux';
import Spinner from '../../components/Spinner/Spinner';

class WeatherInfo extends Component {

  constructor(props) {
    super(props);
    this.state = { error : this.props.serverError, weather : this.props.data.city };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.city != this.props.city) {
      this.graphQLQuery(nextProps.city);
    }
  }

  graphQLQuery(city) {
    this.props.client.query({
      query: fetchCityWeather,
      variables: { name:  city },
    }).then(data => {
      this.setState({
        weather : {
          ...data.data.city
        },
        error : false
      })
    }, err => {
      this.setState({ weather : undefined, error : true });
    }).catch(err => {
      this.setState({weather : undefined, error : true });
    });
  }

  render() {

    const weather = this.state.weather;

    let weatherInfo = (<Aux>
      <div className="panel-heading">Loading</div>
      <Spinner/>
    </Aux>);

    let weatherItems = undefined;

    if((this.state.error || this.props.data.error) || (this.props.serverError == undefined && weather == undefined)) {
      weatherItems = <li className="list-group-item"><b>Error: </b> The specified city could not be found.</li>;
    } else if(weather) {
      weatherItems = (
        <Aux>
          <li className="list-group-item">Temperature: <b>{weather.temperature}°C</b></li>
          <li className="list-group-item">Humidity: <b>{weather.humidity}</b></li>
          <li className="list-group-item">Wind: <b>{weather.wind} m/s Øst</b></li>
        </Aux>
      );
    } else {
      return weatherInfo;
    }

    return (
      <Aux>
        <div className="panel-heading">Weather in <b>{this.props.city}</b></div>
        <ul className="list-group">
          {weatherItems}
          <li className="list-group-item">
            <form className="form-inline" method="get" action="/" onSubmit={this.props.onClickHandler}>
              <div className="form-group">
                <input type="text"
                       minLength={2}
                       onChange={this.props.onNameChangeHandler}
                       className="form-control"
                       id="city"
                       placeholder="City"
                       name="city"/>
              </div>
              <button type="submit" className="btn btn-default">Search</button>
            </form>
          </li>
        </ul>
      </Aux>
    );
  }
}

export default compose(
  withApollo,
  graphql(fetchCityWeather,{
    options: (props) => { return { variables: { name: props.city } } }
  }),
)(WeatherInfo);