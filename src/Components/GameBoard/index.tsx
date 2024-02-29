import { useEffect, useState } from 'react'
import { css } from '@emotion/css'
import Tile from '../Tile/Tile'
import Button from '../Button/Button'

const NUM_TILES = 15

const GameBoard = () => {
  const generateShuffledTiles = () => {
    const tiles = Array.from({ length: NUM_TILES }, (_, i) => i + 1)
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]]
    }
    return tiles
  }

  const [tiles, setTiles] = useState(generateShuffledTiles)

  const handleClick = (index: number) => {
    const newTiles = [...tiles]
    const emptyTile = newTiles.indexOf(NUM_TILES)
    const clickedTile = newTiles[index]
    const ajdTile = Math.abs(emptyTile - index)
    if (ajdTile === 1 || ajdTile === 5) {
      newTiles[emptyTile] = clickedTile
      newTiles[index] = NUM_TILES
      setTiles(newTiles)
    }
  }

  const handleShuffle = () => {
    setTiles(generateShuffledTiles)
  }

  useEffect(() => {
    const isSolved = tiles.every((tile, index) => tile === index + 1)
    if (isSolved) alert(`Congratulations! You solved the puzzle.`)
  }, [tiles])

  return (
    <>
      <div className={container}>
        {tiles.map((tile, index) => (
          <Tile key={index} tile={tile} onClick={() => handleClick(index)} />
        ))}
      </div>
      <Button btnText='Reset Game' onClick={handleShuffle} />
    </>
  )
}

export default GameBoard

const container = css`
  background: #d3d3d3;
  margin-top: 3rem;
  padding: 2px;
  display: grid;
  grid-template-columns: repeat(5, 80px);
  grid-template-rows: repeat(3, 80px);
  gap: 2px;
  justify-items: center;
  align-items: center;
`
