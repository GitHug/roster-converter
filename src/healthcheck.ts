import http from 'http';
import { info, trace } from './logger';

const options = {
  host: 'localhost',
  port: process.env.PORT || 8000,
  path: '/ping',
  timeout: 500,
  method: 'GET'
};

const request = http.request(options);

request.on('response', (res) => {
  info(`HEALTH CHECK STATUS: ${res.statusCode}`);
  if (res.statusCode == 200) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});

request.on('error', function (err) {
  trace(err);
  request.end();
  process.exit(1);
});

request.end();

export default {};
