import {Method} from '../../utility/method.key'

export interface IRouter {
    method: Method;
    path: string;
    handlerName: string | symbol;
  }