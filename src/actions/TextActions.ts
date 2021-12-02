import {Action} from 'redux';

export enum TextActions{
    TEXT_CHANGED = "TEXT_CHANGED",
    FONTSIZE_CHANGED = "FONTSIZE_CHANGED",
    COLOR_CHANGED = "COLOR_CHANGED",
    COLLAPSED = "COLLAPSED",
    FONT_FAMILY_CHANGED = "FONT_FAMILY_CHANGED",
    BOLD_SELECTED = "BOLD_SELECTED",
    CURSIVE_SELECTED = "CURSIVE_SELECTED",
    UNDERLINED_SELECTED = "UNDERLINED_SELECTED",
}

export interface ITextActions extends Action {
    payload: string;
    payload_fontsize:number;
    payload_color:string;
    payload_complementary:any;
    payload_collapsed:boolean;
    payload_font_family:any;
    payload_bold:boolean;
    payload_cursive:boolean;
    payload_underlined:boolean;
}