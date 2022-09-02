import {methodDecoratorFactory} from '../../decorators/action.decorator';
import {Method} from '../../utility/method.key';

export const Get = methodDecoratorFactory(Method.GET);
export const Post = methodDecoratorFactory(Method.POST);
export const Put = methodDecoratorFactory(Method.PUT);
export const Options = methodDecoratorFactory(Method.OPTIONS);
export const Delete = methodDecoratorFactory(Method.DELETE);
export const Trace = methodDecoratorFactory(Method.TRACE);
export const Patch = methodDecoratorFactory(Method.PATCH);
