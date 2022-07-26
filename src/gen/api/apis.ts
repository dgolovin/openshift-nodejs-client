export * from './customObjectsApi';
import { CustomObjectsApi } from './customObjectsApi';
export * from './imageOpenshiftIoApi';
import { ImageOpenshiftIoApi } from './imageOpenshiftIoApi';
export * from './imageOpenshiftIoV1Api';
import { ImageOpenshiftIoV1Api } from './imageOpenshiftIoV1Api';
export * from './projectOpenshiftIoApi';
import { ProjectOpenshiftIoApi } from './projectOpenshiftIoApi';
export * from './projectOpenshiftIoV1Api';
import { ProjectOpenshiftIoV1Api } from './projectOpenshiftIoV1Api';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CustomObjectsApi, ImageOpenshiftIoApi, ImageOpenshiftIoV1Api, ProjectOpenshiftIoApi, ProjectOpenshiftIoV1Api];
