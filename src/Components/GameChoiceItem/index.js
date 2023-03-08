import {ChoiceItem, ChoiceImage} from './StyledComponents'

const GameChoiceItem = props => {
  const {selectChoiceFunc, choiceDetails} = props

  const callSelectChoiceFunc = () => {
    selectChoiceFunc(choiceDetails)
  }
  return (
    <ChoiceItem
      onClick={callSelectChoiceFunc}
      data-testid={choiceDetails['data-testid']}
    >
      <ChoiceImage src={choiceDetails.imageUrl} alt={choiceDetails.id} />
    </ChoiceItem>
  )
}

export default GameChoiceItem
