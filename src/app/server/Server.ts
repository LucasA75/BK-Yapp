import express from 'express';
import * as http from 'http';
import Router from 'express-promise-router';
import routesSwagger from 'express-list-endpoints'
import { hostname } from 'os';
import { registerRoutes } from '../routes';
import { RouteErrorHandlerResponse } from './RouteErrorHandlerResponse';

export class Server {
  private readonly port: number;
  private httpServer?: http.Server;
  public app = express();

  constructor(port: number) {
    this.port = port;
    // this.app.use(express.json());
    /* this.app.use(express.urlencoded({ extended: true })); */
    const router = Router();
    this.app.use(router);
    registerRoutes(router);
    // eslint-disable-next-line no-console
    console.log(routesSwagger(this.app));
    this.app.use(RouteErrorHandlerResponse);
  }

  listen = async (): Promise<void> => {
    return new Promise((resolve) => {
      this.httpServer = this.app.listen(this.port, () => {
        // eslint-disable-next-line no-console
        console.log(`Server is running at ${hostname}:${this.port}`);
        // eslint-disable-next-line no-console
        console.log('Press CTRL-C to stop');
        resolve();
      });
    });
  };

  getHTTPServer = () => {
    return this.httpServer;
  };

  stop = async (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  };
}
