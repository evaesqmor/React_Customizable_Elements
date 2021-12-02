import {Action} from 'redux';

export enum ImageActions{
    IMAGE_CHANGED = "IMAGE_CHANGED",
    IMAGE_RADIUS = "IMAGE_RADIUS",
    EFFECT_CHANGED = "EFFECT_CHANGED",
    SATURATION = "SATURATION",
    BRIGHTNESS = "BRIGHTNESS",
    CONTRAST = "CONTRAST",
}
export interface IImageActions extends Action {
    payload_image_source: string;
    payload_image_radius: number;
    payload_effect:string;
    payload_saturation: number;
    payload_brightness: number;
    payload_contrast:number;
}