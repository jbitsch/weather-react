const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
} = graphql;

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    temperature : {type: GraphQLFloat},
    humidity : {type: GraphQLInt},
    wind : {type: GraphQLFloat}
  })
});

module.exports = CityType;