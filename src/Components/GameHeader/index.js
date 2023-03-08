import {
  HeaderBox,
  HeaderTextBox,
  HeaderText,
  HeaderScoreBox,
  HeaderScoreText,
  HeaderScoreNumber,
  HeaderTag,
} from './StyledComponents'

const GameHeader = props => {
  const {score} = props
  return (
    <HeaderBox>
      <HeaderTextBox>
        <HeaderTag>ROCK PAPER SCISSORS</HeaderTag>
      </HeaderTextBox>
      <HeaderScoreBox>
        <HeaderScoreText>Score</HeaderScoreText>
        <HeaderScoreNumber>{score}</HeaderScoreNumber>
      </HeaderScoreBox>
    </HeaderBox>
  )
}

export default GameHeader

/* <HeaderText>ROCK</HeaderText>
        <HeaderText>PAPER</HeaderText>
        <HeaderText>SCISSOR</HeaderText> */
