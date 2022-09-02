import {Method} from '../utility/method.key';
import {MetadataKeys} from '../utility/meta-data.key';
import {IRouter} from '../handler/Router/Irouter';

export const methodDecoratorFactory = (method: Method)  =>{
    return (path:string) : MethodDecorator =>{
        return (target,propertyKey) =>{
            const controllerClass =  target.constructor;

            const routerArray:IRouter[] = Reflect.hasMetadata(MetadataKeys.ROUTERS,controllerClass) ? Reflect.getMetadata(MetadataKeys.ROUTERS,controllerClass):[];

            routerArray.push({
                method,
                path,
                handlerName: propertyKey
            });

            Reflect.defineMetadata(MetadataKeys.ROUTERS,routerArray,controllerClass);
        }
    }
}

