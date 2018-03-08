import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchWeatherSuccess = ( weather ) => {
  return {
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    weather: weather
  };
};

export const fetchWeatherFail = ( error ) => {
  return {
    type: actionTypes.FETCH_WEATHER_FAIL,
    error: error
  };
};

export const fetchWeatherStart = () => {
  return {
    type: actionTypes.FETCH_WEATHER_START
  };
};

export const fetchWeather = (city) => {
  return dispatch => {
    dispatch(fetchWeatherStart());

    axios.get("/api/weather/"+city)
      .then(response => response.data)
      .then(function (data) {
        dispatch(fetchWeatherSuccess(data));
      },function (err) {
        dispatch(fetchWeatherFail(err));
      }).catch(function (err) {
        dispatch(fetchWeatherFail(err));
    });
  };
};

export const cityNameChanged = (city) => {
  return dispatch => {
    dispatch({
      type: actionTypes.CITY_NAME_CHANGED,
      city : city
    });
  }
};