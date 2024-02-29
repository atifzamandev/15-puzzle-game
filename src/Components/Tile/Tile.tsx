import { css } from '@emotion/css'
import React from 'react'

const NUM_TILES = 15

interface Props {
  tile: number
  onClick: () => void
}

const Tile: React.FC<Props> = ({ tile, onClick }) => {
  return (
    <button className={tile !== NUM_TILES ? button : emptyButton} onClick={onClick}>
      {tile !== NUM_TILES && tile}
    </button>
  )
}

export default Tile

const button = css`
  width: 80px;
  height: 80px;
  font-size: 2.5em;
  background: #add8e6;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #000000;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #2daad3;
  }
`
const emptyButton = css`
  width: 80px;
  height: 80px;
  background: #d3d3d3;
  border: 0px;
`
