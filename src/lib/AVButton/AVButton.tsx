import * as React from "react";
import styled from 'styled-components'
import { GlobalStyle } from '../../module/styles'
import { AVSpinner } from "../index";


export interface IPropsAVButton {
  className?: string
  loadingMode?: boolean
  /** Size of the button */
  size?: 'small' | 'default' | 'large' | 'conform'
  /** Button style */
  color?: 'primary' | 'secondary' | 'tertiary' | 'borderless' | 'danger'
  /** Shape of the button */
  shape?: 'rounded' | 'rectangle' | 'pill'

  children?: React.ReactElement
  [key: string]: any
}

export const AVButton = (props: IPropsAVButton) => {
  const { className, color, loadingMode, children } = props;


  return (
    <>
      <GlobalStyle />
      <ButtonBase {...props} className={`av-button ${className}`} data-theme="light">
        <div className="enclosure-loader">
          <div className="enclosing">
            {
              loadingMode
              && <AVSpinner
                width="20px"
                height="20px"
                backColor={(color === 'secondary' || color === 'tertiary') ? 'var(--color-loading-background)' : ''}
                foreColor={(color === 'secondary' || color === 'tertiary') ? 'var(--color-loading-prominent)' : ''} />
            }
          </div>
        </div>
        <div className="enclosure-content">
          {children}
        </div>
      </ButtonBase>
    </>


  );
}

const ButtonBase = styled.div<IPropsAVButton>`
  display: ${props => props.size !== 'conform' ? 'inline-block' : 'block'};
  position: relative;

  font-family: "Manrope", sans-serif;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.1s ease-in-out;

  width: ${props => props.size === 'conform' ? '100%' : 'auto'};
  height: ${props => props.size === 'conform' ? '100%'
                   : props.size === 'small' ? '32px'
                   : props.size === 'large' ? '48px'
                   : '40px'};
  padding: ${props => props.size !== 'conform' ? '0 16px' : '0'};
  border-radius: ${props => props.shape === 'pill' ? '50px'
                          : props.shape === 'rectangle' ? '0'
                          : '4px'};
  font-size: ${props => props.size === 'large' ? '12pt'
                      : props.size === 'small' ? '9pt'
                      : '10pt'};

  
  & {
    background-color: ${props => props.color === 'borderless' ? 'rgba(0, 0, 0, 0)'
                               : props.color === 'tertiary' ? 'rgba(0, 0, 0, 0.04)'
                               : props.color === 'danger' ? 'rgb(255, 77, 79)'
                               : !props.color && 'var(--color-button-primary-background-default)'};

    border: ${props => props.color === 'secondary' && '1px solid var(--color-button-primary-background-default)'};

    color: ${props => props.color === 'secondary' ? 'var(--color-primary)'
                    : (props.color === 'tertiary' || props.color === 'borderless') ? 'rgba(0, 0, 0, 1)'
                    : 'white'};

    &:hover {
      ${props => (props.color === 'primary' 
               || props.color === 'danger' 
               || !props.color) && `
        background-color: ${props.color === 'danger' ? 'rgb(255, 120, 116)' : 'var(--color-button-primary-background-default)'};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      `}

      ${props => (props.color === 'secondary') && `
        border: 1px solid var(--color-button-primary-background-hover);
      `}

      ${props => (props.color === 'tertiary' || props.color === 'borderless') && `
        color: var(--color-button-primary-background-default);
      `}
    }

    &:active {
      ${props => (props.color === 'primary' || props.color === 'danger' || !props.color) && `
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
      `}

      ${props => (props.color === 'secondary' || props.color === 'borderless' || props.color === 'tertiary') && `
        background-color: rgba(0, 0, 0, 0.08);
      `}
    }
  }

  & > .enclosure-loader,
  & > .enclosure-content {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > .enclosure-loader {
    position: absolute;
    z-index: 0;

    & > .enclosing {
      width: auto;
      height: auto;
    }
  }

  & > .enclosure-content {
    height: 100%;
    position: relative;
    z-index: 1;
  }
  
  ${props => props.loadingMode && `
    pointer-events: none;

    ${props.color === 'borderless' && ` background-color: rgba(0, 0, 0, 0.05)`};

    & > .enclosure-content {
      visibility: hidden;
    }
  `}

  /* &.loading {
    pointer-events: none;

    &.borderless {
      background-color: rgba(0, 0, 0, 0.05);
    }
    
    .enclosure-content {
      visibility: hidden;;
    }
  } */
`