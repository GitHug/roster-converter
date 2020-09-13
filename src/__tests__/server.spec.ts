import app from '../app';

jest.mock('../app', () => ({
  listen: jest.fn((port: number, fn: () => void) => fn()),
  get: () => 424242
}));
const mockApp = app as jest.Mocked<typeof app>;

describe('server', () => {
  it('should listen to port provided by the app', () => {
    require('../server');
    expect(mockApp.listen).toHaveBeenCalledWith(424242, expect.any(Function));
  });
});
