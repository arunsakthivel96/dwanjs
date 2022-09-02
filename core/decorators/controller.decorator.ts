import {MetadataKeys} from '../utility/meta-data.key';

const controller = (basePath: string): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(MetadataKeys.BASE_PATH, basePath, target);
  };
}

export default controller;
