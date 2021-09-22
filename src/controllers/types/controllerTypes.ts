import {Request} from "express";

export interface IRequestFile extends Request {
    file?: any;
}

export interface IRequestUser extends Request {
    user?: any;
}

export interface IQuery {
    user?: any;
    date?: any;
    order?: any;
    query?: any;
}
