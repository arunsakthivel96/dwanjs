import 'reflect-metadata'

import {Get,Post,Put,Patch,Delete,Trace} from './core/handler/Router/router';
import controller from './core/decorators/controller.decorator';

export const Routes ={
    Get,
    Post,
    Put,
    Delete,Patch,
    Trace
}

export const Controller = controller;