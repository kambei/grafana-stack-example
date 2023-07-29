const express = require('express');
const graylog2 = require('graylog2');
const client = require('prom-client');
const app = express();

// Middleware to parse request bodies
app.use(express.json());

// Create a new Registry which registers the metrics
const register = new client.Registry();

// Add a default label which is added to all metrics
register.setDefaultLabels({
  app: 'sample-node'
});

// Enable the collection of default metrics
client.collectDefaultMetrics({ register });

// Setup the /metrics endpoint
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (ex) {
    res.status(500).end(ex);
  }
});

// Create a new Prometheus counter
const counter = new client.Counter({
  name: 'node_request_operations_total',
  help: 'The total number of processed requests',
});

// Increase the counter on each request to the application
app.use((req, res, next) => {
  counter.inc();
  next();
});

// Graylog configuration
const graylogConfig = {
  servers: [{ host: 'promtail', port: 12201 }],
  hostname: 'sample-node', // Optional
};

const graylog = new graylog2.graylog(graylogConfig);

// Express route
app.post('/sample/test', (req, res) => {
  const message = req.body.message;

  // Log the message to Graylog
  graylog.log(message, 'Sample log');

  res.sendStatus(200);
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
