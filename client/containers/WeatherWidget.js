import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherInfo from '../components/WeatherInfo/WeatherInfo';

import * as actions from '../store/actions/index';

class WeatherWidget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "query" : ""
    };
  }

  searchWeatherHandler = (event) => {
    event.preventDefault();

    const city = this.state.query;

    if(city.length >= 2) {
      const path = "?city="+city;
      this.setState({query:city});
      window.history.pushState( {} , '', path);
      this.getWeather(city);
    } else {
      alert("The city name is to short. Should at least be 2 characters.s");
    }
  };

  handleCityNameChange = (event) => {
    this.setState({query: event.target.value});
  };

  getWeather(city) {
    //this.props.onFetchWeather(city); // Normal API call
    this.props.onCityChanged(city);
  };

  render () {
    let widgetStyle = { margin: '10px', width: '300px' };

    const weatherInfo = <WeatherInfo
      serverError={this.props.serverError}
      city={this.props.city}
      onClickHandler={this.searchWeatherHandler}
      onNameChangeHandler={this.handleCityNameChange}
      weather={this.props.weather}
      loading={this.props.loading}
    />;

    return (
      <div className="widget" style={widgetStyle}>
        <div className="panel panel-info">
          {weatherInfo}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    weather : state.weather,
    city : state.city
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchWeather: (city) => dispatch(actions.fetchWeather(city)),
    onCityChanged : (city) => dispatch(actions.cityNameChanged(city))
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( WeatherWidget );