import {Action} from 'redux';

export enum HeaderActions{
    HEADER_COLLAPSED = "HEADER_COLLAPSED"
}

export interface IHeaderActions extends Action {
    payload: boolean;
}