import 'reflect-metadata'

import {Get,Post,Put,Patch,Delete,Trace} from './core/handler/Router/router';
import controller from './core/decorators/controller.decorator';
import { Method } from './core/utility/method.key';
import {MetadataKeys} from './core/utility/meta-data.key';

export const Routes ={
    Get,
    Post,
    Put,
    Delete,Patch,
    Trace
}
export const MetadataKey = MetadataKeys;
export const Controller = controller;

export interface IRouter {
    method: Method;
    path: string;
    handlerName: string | symbol;
  }