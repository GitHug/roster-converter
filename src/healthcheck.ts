import http from 'http';
import path from 'path';
import fs from 'fs';
import FormData from 'form-data';
import { info, trace } from './logger';

const form = new FormData();
form.append('data', fs.createReadStream(path.resolve('src/healthcheck/rosterFile.rosz')));

const options = {
  host: 'localhost',
  port: '8000',
  path: '/conversion',
  timeout: 2000,
  method: 'POST',
  headers: form.getHeaders()
};

const request = http.request(options);
form.pipe(request);

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

export default {};
