import { Server } from './Server';
import Config from '../config/index';

export class Run {
  server?: Server;

  async start() {
    this.server = new Server(Number(Config.PORT));
    return this.server.listen();
  }

  async stop() {
    return this.server?.stop();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }
}
