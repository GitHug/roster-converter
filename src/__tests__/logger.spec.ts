import * as logger from '../logger';

describe('logger', () => {
  beforeEach(() => {
    process.env.SILENT = '';
    jest.spyOn(Date, 'now').mockImplementation(() => 1600010987727);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should print an info message', () => {
    const spy = jest.spyOn(global.console, 'log').mockImplementation();

    logger.info('Some message');
    expect(spy).toHaveBeenCalledWith('⚡️[INFO 2020-09-13 15:29:47]: Some message');
  });

  it('should print a warn message', () => {
    const spy = jest.spyOn(global.console, 'warn').mockImplementation();

    logger.warn('Some message');
    expect(spy).toHaveBeenCalledWith('⚡️[WARN 2020-09-13 15:29:47]: Some message');
  });

  it('should print an error message', () => {
    const spy = jest.spyOn(global.console, 'error').mockImplementation();

    logger.error('Some message');
    expect(spy).toHaveBeenCalledWith('⚡️[ERROR 2020-09-13 15:29:47]: Some message');
  });

  it('should print a trace message', () => {
    const spy = jest.spyOn(global.console, 'trace').mockImplementation();

    logger.trace('Some message');
    expect(spy).toHaveBeenCalledWith('⚡️[ERROR 2020-09-13 15:29:47]: Some message');
  });

  it.each([
    ['log', logger.info],
    ['warn', logger.warn],
    ['error', logger.error],
    ['trace', logger.trace]
  ])('should not %s if SILENT env variable is set', (method: string, fn: () => void) => {
    const spy = jest.spyOn(global.console, method as 'log' | 'warn' | 'error' | 'trace');

    process.env.SILENT = 'true';
    fn();
    expect(spy).not.toHaveBeenCalled();
  });
});
