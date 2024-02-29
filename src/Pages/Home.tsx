import { css } from '@emotion/css'

import GameBoard from '../Components/GameBoard'

const Home = () => {
  return (
    <div className={container}>
      <h1> 15 Puzzle Game</h1>
      <GameBoard />
    </div>
  )
}

export default Home

const container = css`
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  margin-top: 5rem;
`
