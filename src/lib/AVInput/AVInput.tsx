import * as React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { GlobalStyle } from '../../module/styles'


export interface IPropsAVInput {
  id: string
  value?: string
  children?: any
  className?: string
  isLoading?: boolean

  size?: 'small' | 'default' | 'large'
  theme?: 'light' | 'dark'
  type?: 'text' | 'email' | 'search' | 'tel' | 'number' | 'url' | "password"
  label?: string
  placeholder?: string
  validator?: 'none' | 'auto' | 'email' | 'tel'

  locked?: boolean
  errorLabel?: string
  loadingMode?: boolean

  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
  [key: string]: any
}

interface IPropsInputRootBase extends IPropsAVInput {
  focused: boolean
  error: boolean
  labeled: boolean
  isTabbing: boolean
}

export const AVInput = (props: IPropsAVInput) => {

  const [tabbingMode, setTabbingMode] = useState(false)
  const [textValue, setTextValue] = useState('')
  const [focused, setFocused] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(!!props.errorLabel)
  }, [props.errorLabel])

  useEffect(() => {
    setTextValue(props.value || '')
  }, [props.value])

  useEffect(() => {
    if (props.loadingMode) setTextValue('')
    if (!props.loadingMode) setTextValue(props.value || '')
  }, [props.loadingMode])


  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTextValue(value)

    if (error) setError(false)

    props.onChange && props.onChange(e)
  }

  return (
    <>
      <GlobalStyle />
      <InputRootBase
        {...props}
        focused={focused}
        error={error}
        labeled={!props.locked && props.label && props.size === 'large' && (focused || textValue)}
        data-theme={props.theme || 'light'}>
        <div className="input-label">{props.label}</div>
        <div className="input-enclosing">
          <input
            id={props.id}
            type={props.type && props.type || 'text'}
            value={textValue}
            placeholder={props.placeholder}
            onChange={_onChange}
            onFocus={() => !props.locked && setFocused(true)}
            onBlur={() => !props.locked && setFocused(false)}
          />
        </div>
        <div className="input-info">
          {props.errorLabel}{!!props.label && !props.errorLabel && '&nbsp;'}
        </div>
      </InputRootBase>
    </>
  )
}

const InputRootBase = styled.div<IPropsInputRootBase>`
  width: 100%;
  margin: 4px 0;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  transition: 0.2s all;

  & > .input-enclosing {
    overflow: hidden;
    box-sizing: border-box;

    height: ${props => props.size === "small" ? "40px"
                     : props.size === "large" ? "56px"
                     : "48px"};

    & > input {
      padding: ${props => props.size === "small" ? "0 12px"
                        : "0 14px"};

      font-size: ${props => props.size === "small" ? "14px"
                          : "16px"};
      
    }
  }

  & > .input-label {
    overflow: hidden;
    box-sizing: border-box;

    padding-bottom: 8px;
    color: var(--color-textbox-label);
  }

  & > .input-enclosing {
    background-color: var(--color-textbox-background);
    border: 1px solid var(--color-textbox-background);
    border-radius: 4px;

    & > input {
      overflow: hidden;
      box-sizing: border-box;
      outline: none;
      
      width: 100%;
      height: 100%;
      padding: 0px 16px;
      position: relative;
      border: none;

      background-color: transparent;
      transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
      -webkit-appearance: none;

      &::-webkit-input-placeholder {
        color: var(--color-text-em-disable);
      }
      &::-moz-placeholder {
        color: var(--color-text-em-disable);
      }
      &:-ms-input-placeholder {
        color: var(--color-text-em-disable);
      }
      &:-moz-placeholder {
        color: var(--color-text-em-disable);
      }
    }
  }

  & > .input-info {
    visibility: hidden;
    padding-top: 4px;
    padding-bottom: 6px;
    padding-left: 2px;

    font-size: 9pt;
    font-weight: 700;
  }

  ${props => props.focused && `
    & > .input-label {
      color: var(--color-textbox-label-active);
    }

    & > .input-enclosing {
      border: 1px solid var(--color-textbox-border-hover);
    }
  `}

  ${props => props.error && `
    & > .input-label {
      color: var(--color-textbox-error);
    }
    
    & > .input-enclosing {
      background-color: var(--color-textbox-error-background);
      border: 1px solid var(--color-textbox-error);
    }

    & > .input-info {
      visibility: visible;
      color: var(--color-textbox-error);
    }
  `}

  ${props => props.locked && `
    & > .input-enclosing > input {
      color: var(--color-text-em-disable);
      pointer-events:none;
    }
  `}
`