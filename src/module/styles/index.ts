import { createGlobalStyle } from 'styled-components'
import { TypefaceGilroy } from '../fonts/Gilroy'

export const GlobalStyle = createGlobalStyle`

  ${TypefaceGilroy}

  [data-theme="light"] {
    --color-primary:          #03969e;
    --color-primary-light-1:  #22c3cb;

    --color-button-primary-background-default: #03969e;
    --color-button-primary-background-hover:   #22c3cb;

    --color-loading-background: rgba(3, 150, 158, 0.2 );
    --color-loading-prominent:  #03969e;

    --color-textbox-background:       rgb(248, 247, 249);
    --color-textbox-border-hover:     rgb(67, 124, 240);
    --color-textbox-placeholder:      rgb(191, 188, 201);
    --color-textbox-label:            rgb(132, 127, 151);
    --color-textbox-label-active:     rgb(38, 30, 73);
    --color-textbox-text:             #282828;
    --color-textbox-error:            rgb(235, 64, 89);
    --color-textbox-error-background: rgb(254, 247, 250);

    --color-text-em-first:   rgba(0, 0, 0, 1);
    --color-text-em-hi:      rgba(0, 0, 0, 0.87);
    --color-text-em-med:     rgba(0, 0, 0, 0.6);
    --color-text-em-disable: rgba(0, 0, 0, 0.38);
  }

  
`