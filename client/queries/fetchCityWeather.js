import gql from 'graphql-tag';

export default gql`
  query CityQuery($name: String!) {
    city(name: $name) {
      name
      id
      humidity
      temperature
      wind
    }
  }
`;
