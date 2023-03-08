import {
  ChoiceImage,
  ResultViewContainer,
  ResultItemContainer,
  SelectorName,
  ResultText,
  PlayAgainBtn,
  ResultChoicesContainer,
} from './StyledComponents'

const GameResultView = props => {
  const {isPlaying, choice, computerChoice, playAgainFunc, result} = props

  return (
    <ResultViewContainer isPlaying={isPlaying}>
      <ResultChoicesContainer isPlaying={isPlaying}>
        <ResultItemContainer>
          <SelectorName>YOU</SelectorName>
          <ChoiceImage src={choice.imageUrl} alt="your choice" />
        </ResultItemContainer>
        <ResultItemContainer>
          <SelectorName>Opponent</SelectorName>
          <ChoiceImage src={computerChoice.imageUrl} alt="opponent choice" />
        </ResultItemContainer>
      </ResultChoicesContainer>
      <ResultText>{result}</ResultText>
      <PlayAgainBtn type="button" onClick={playAgainFunc}>
        PLAY AGAIN
      </PlayAgainBtn>
    </ResultViewContainer>
  )
}

export default GameResultView
