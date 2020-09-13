import app from '../app';
import request from 'supertest';
import rosz2js, { Roster } from 'rosz2js';
import schema from '../schema';
import { ValidationError, ValidationErrorItem, ValidationResult } from 'joi';

jest.mock('rosz2js');
const mockedRosz2js = rosz2js as jest.Mocked<typeof rosz2js>;

jest.mock('../schema', () => ({
  validate: jest.fn(() => ({ error: null }))
}));
const mockedSchema = schema as jest.Mocked<typeof schema>;

describe('GET /ping - pong', () => {
  it('returns 200', async () => {
    const result = await request(app).get('/ping');
    expect(result.status).toBe(200);
    expect(JSON.parse(result.text)).toEqual({ message: 'pong' });
  });
});

describe('POST /conversion - converts roster file to Javascript object', () => {
  it('returns a 422 if no form data is included', async () => {
    const result = await request(app).post('/conversion');
    expect(result.status).toBe(422);
  });

  it('returns 422 if no file is included in form data', async () => {
    const buffer = (null as unknown) as Buffer;
    const result = await request(app).post('/conversion').attach('files', buffer);

    expect(result.status).toBe(422);
  });

  it('returns 422 if the files does not have expected format', async () => {
    const validationErrorMessage = {
      message: 'Validation error'
    } as Partial<ValidationErrorItem>;

    const validationError = {
      details: [validationErrorMessage as ValidationErrorItem]
    } as Partial<ValidationError>;

    const validationResult = {
      error: validationError as ValidationError
    } as Partial<ValidationResult>;

    mockedSchema.validate.mockImplementationOnce(() => validationResult as ValidationResult);

    const buffer = Buffer.from('hello');
    const result = await request(app).post('/conversion').attach('files', buffer, 'some_name.rosz');

    expect(result.status).toBe(422);
    expect(JSON.parse(result.text)).toEqual({
      validationErrors: [
        {
          message: 'Validation error'
        }
      ]
    });
  });

  it('returns 200 if the roster is converted successfully', async () => {
    const roster: Partial<Roster> = {};

    mockedRosz2js.parse.mockImplementation(() => Promise.resolve(roster as Roster));
    const buffer = Buffer.from('hello');
    const result = await request(app).post('/conversion').attach('files', buffer, 'some_name.rosz');

    expect(result.status).toBe(200);
  });

  it('returns 500 if the roster is not converted successfully', async () => {
    mockedRosz2js.parse.mockImplementation(() => Promise.reject(new Error('Something went wrong')));
    const buffer = Buffer.from('hello');
    const result = await request(app).post('/conversion').attach('files', buffer, 'some_name.rosz');

    expect(result.status).toBe(500);
  });
});
