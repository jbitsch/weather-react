const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;
const CityType = require('./city_type');
const City = require('../models/city');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    city: {
      type: CityType,
      args: { name: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { name }) {
        return City.get(name)
      }
    },
  })
});

module.exports = RootQuery;
