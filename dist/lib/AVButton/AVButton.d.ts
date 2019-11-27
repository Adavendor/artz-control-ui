import * as React from "react";
export interface IPropsAVButton {
    className?: string;
    loadingMode?: boolean;
    /** Size of the button */
    size?: 'small' | 'default' | 'large' | 'conform';
    /** Button style */
    color?: 'primary' | 'secondary' | 'tertiary' | 'borderless' | 'danger';
    /** Shape of the button */
    shape?: 'rounded' | 'rectangle' | 'pill';
    children?: React.ReactElement;
    [key: string]: any;
}
export declare const AVButton: (props: IPropsAVButton) => JSX.Element;
