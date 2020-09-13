import app from './app';
import { info } from './logger';

const server = app.listen(app.get('port'), () => {
  info(`Server is running on port ${app.get('port')}`);
});

export default server;
