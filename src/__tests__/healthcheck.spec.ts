import http, { ClientRequest, IncomingMessage } from 'http';

jest.mock('http');
jest.mock('form-data');

const mockHttp = http as jest.Mocked<typeof http>;

interface KeyValue {
  [key: string]: (response: IncomingMessage | Error) => void;
}

describe('healthcheck', () => {
  const map: KeyValue = {};

  const request = ({
    on: (key: string, cb: (response: IncomingMessage | Error) => void) => {
      map[key] = cb;
    },
    end: jest.fn()
  } as unknown) as ClientRequest;

  beforeEach(() => {
    mockHttp.request.mockImplementationOnce(() => request);
  });

  it('should exit with error code 1 if an error occurs', () => {
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation();

    require('../healthcheck');

    map['error'](new Error());

    expect(request.end).toHaveBeenCalled();
    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  it.each([
    [1, 404],
    [1, 422],
    [1, 500],
    [0, 200]
  ])('should exit with error code %s if the response has status code %s', (exitCode, statusCode) => {
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation();

    require('../healthcheck');

    const response = {
      statusCode
    } as Partial<IncomingMessage>;

    map['response'](response as IncomingMessage);
    expect(exitSpy).toHaveBeenCalledWith(exitCode);
  });
});
