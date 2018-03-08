import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  weather : undefined,
  city : ""
};

const fetchWeatherStart = ( state, action ) => {
  return {
    ...state,
    ...{ loading: false, weather : undefined }
  };
};

const fetchWeatherSuccess = ( state, action ) => {
  return {
    ...state,
    ...{ loading: false, weather:action.weather }
  };
};

const fetchWeatherFail = ( state, action ) => {
  return {
    ...state,
    ...{ loading: false, weather : undefined }
  };
};

const cityNameChanged = ( state, action ) => {
  return {
    ...state,
    ...{ loading: false, weather : undefined, city : action.city }
  };
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.FETCH_WEATHER_START: return fetchWeatherStart( state, action );
    case actionTypes.FETCH_WEATHER_SUCCESS: return fetchWeatherSuccess( state, action );
    case actionTypes.FETCH_WEATHER_FAIL: return fetchWeatherFail( state, action );
    case actionTypes.CITY_NAME_CHANGED: return cityNameChanged( state, action );
    default: return state;
  }
};

export default reducer;