import * as React from "react";
import styled, { keyframes } from 'styled-components'
import { GlobalStyle } from '../../module/styles'


export interface IPropsAVSpinner {
  className?: string
  width?: string
  height?: string
  backColor?: string
  foreColor?: string
  thickness?: string
  duration?: string 
}

export const AVSpinner = (props: IPropsAVSpinner) => (
  <>
    <GlobalStyle />
    <SpinnerBase {...props} className={`av-spinner ${props.className || ''}`}>
      <div className="loader" />
    </SpinnerBase>
  </>
)

const SpinnerKeyframes = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const SpinnerBase = styled.div<IPropsAVSpinner>`
  width: ${props => props.width || props.height || '100%'};
  height: ${props => props.height || props.width || '100%'};
  box-sizing: border-box;
  overflow: hidden;

  .loader,
  .loader:after {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 50%;
  }

  .loader {
    // margin: auto auto;
    font-size: 10px;
    position: relative;
    // text-indent: -9999em;

    border-top: ${props => `${props.thickness || '4px'} solid ${props.backColor || 'white'}`};
    border-right: ${props => `${props.thickness || '4px'} solid ${props.backColor || 'white'}`};
    border-bottom: ${props => `${props.thickness || '4px'} solid ${props.backColor || 'white'}`};
    border-left: ${props => `${props.thickness || '4px'} solid ${props.foreColor || 'rgba(255, 255, 255, 0.2)'}`};
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    animation: ${SpinnerKeyframes} ${props => props.duration || '1.1s'} infinite linear;
  }
  
`