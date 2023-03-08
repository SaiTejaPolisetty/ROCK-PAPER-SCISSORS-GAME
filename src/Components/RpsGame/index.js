import {Component} from 'react'

import GameHeader from '../GameHeader'

import GameChoiceItem from '../GameChoiceItem'

import GamePopUp from '../GamePopUp'

import GameResultView from '../GameResultView'

import {
  BgContainer,
  ChoicesContainer,
  AllChoicesContainer,
} from './StyledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    'data-testid': 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    'data-testid': 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    'data-testid': 'paperButton',
  },
]

class RpsGame extends Component {
  state = {
    score: 0,
    choice: '',
    isPlaying: true,
    computerChoice: '',
    result: '',
  }

  selectChoiceFunc = choiceDetails => {
    const computerChoice = Math.floor(Math.random() * 3)

    this.setState(
      {
        choice: choiceDetails,
        computerChoice: choicesList[computerChoice],
        isPlaying: false,
      },
      this.ResultDeterminationFunc,
    )
  }

  playAgainFunc = () => {
    this.setState({isPlaying: true})
  }

  ResultDeterminationFunc = () => {
    const {choice, computerChoice} = this.state
    let {score} = this.state
    let result
    if (choice.id === 'PAPER' && computerChoice.id === 'ROCK') {
      result = 'YOU WON'
      score += 1
    } else if (choice.id === 'PAPER' && computerChoice.id === 'SCISSORS') {
      result = 'YOU LOSE'
      score -= 1
    } else if (choice.id === 'ROCK' && computerChoice.id === 'PAPER') {
      result = 'YOU LOSE'
      score -= 1
    } else if (choice.id === 'ROCK' && computerChoice.id === 'SCISSORS') {
      result = 'YOU WON'
      score += 1
    } else if (choice.id === 'SCISSORS' && computerChoice.id === 'PAPER') {
      result = 'YOU WON'
      score += 1
    } else if (choice.id === 'SCISSORS' && computerChoice.id === 'ROCK') {
      result = 'YOU LOSE'
      score -= 1
    } else if (choice.id === computerChoice.id) {
      result = 'IT IS DRAW'
    }

    this.setState({score, result})
  }

  render() {
    const {isPlaying, score, choice, computerChoice, result} = this.state

    return (
      <BgContainer>
        <GameHeader score={score} />
        <GameResultView
          isPlaying={isPlaying}
          choice={choice}
          computerChoice={computerChoice}
          playAgainFunc={this.playAgainFunc}
          result={result}
        />
        <AllChoicesContainer isPlaying={isPlaying}>
          <ChoicesContainer>
            {choicesList.slice(0, 2).map(obj => (
              <GameChoiceItem
                choiceDetails={obj}
                /*  id={obj.id}
                imageUrl={obj.imageUrl} */
                selectChoiceFunc={this.selectChoiceFunc}
                key={obj.id}
              />
            ))}
          </ChoicesContainer>
          <GameChoiceItem
            /* id={choicesList[2].id}
            imageUrl={choicesList[2].imageUrl} */
            choiceDetails={choicesList[2]}
            selectChoiceFunc={this.selectChoiceFunc}
          />
        </AllChoicesContainer>
        <GamePopUp />
      </BgContainer>
    )
  }
}

export default RpsGame
