import express from 'express';
import multer from 'multer';
import parser from 'rosz2js';
import schema from './schema';
import { info } from './logger';

const app = express();
app.set('port', process.env.PORT || 8000);

const upload = multer();

app.post('/conversion', upload.any(), async (req, res) => {
  info('Receiving request');

  if (!req.files || !req.files.length) {
    return res.status(422).send({
      message: 'File is missing in request'
    });
  }

  const { error: validationError } = schema.validate(req);
  if (validationError) {
    return res.status(422).send({
      validationErrors: validationError.details
    });
  }

  const rosterFile = (req.files as Express.Multer.File[])[0];

  try {
    const data = await parser.parse(rosterFile.buffer);
    return res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({
      message: 'Failed to process uploaded roster',
      error
    });
  }
});

export default app;
