
require('./server/config/config');

import path from 'path'
import Express from 'express'

const expressGraphQL = require('express-graphql');
const routes = require('./server/routes/routes');
const app = Express();
const schema = require('./server/schema/schema');

const port = process.env.PORT;

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Serve static files
app.use(Express.static(path.join(__dirname + "/../", 'client','static')));

// Use graphql
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

// set routes
app.use(routes);

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});





