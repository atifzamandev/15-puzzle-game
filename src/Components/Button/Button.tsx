import React from 'react'
import { css } from '@emotion/css'

interface Props {
  btnText: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({ btnText, onClick }) => {
  return (
    <button className={container} onClick={onClick}>
      {btnText}
    </button>
  )
}

export default Button

const container = css`
  font-size: 2em;
  background: #000000;
  color: #ffffff;
  border: none;
  margin-top: 3rem;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background: #ffffff;
    color: #000000;
    border: 1px solid #000000;
  }
`
