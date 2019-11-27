import * as React from "react";
export interface IPropsAVInput {
    id: string;
    value?: string;
    children?: any;
    className?: string;
    isLoading?: boolean;
    size?: 'small' | 'default' | 'large';
    theme?: 'light' | 'dark';
    type?: 'text' | 'email' | 'search' | 'tel' | 'number' | 'url' | "password";
    label?: string;
    placeholder?: string;
    validator?: 'none' | 'auto' | 'email' | 'tel';
    locked?: boolean;
    errorLabel?: string;
    loadingMode?: boolean;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    [key: string]: any;
}
export declare const AVInput: (props: IPropsAVInput) => JSX.Element;
