import styled from 'styled-components'

export const ChoiceImage = styled.img`
  width: 200px;
  @media (max-width: 1080px) {
    width: 150px;
  }
  @media (max-width: 800px) {
    width: 100px;
  }
`
export const ResultViewContainer = styled.div`
  width: 60%;
  display: ${props => (props.isPlaying ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    width: 80%;
  }
`
export const ResultChoicesContainer = styled(ResultViewContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ResultItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`
export const SelectorName = styled.p`
  color: white;
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
`

export const ResultText = styled(SelectorName)`
  font-size: 25px;
`
export const PlayAgainBtn = styled.button`
  color: #223a5f;
  font-family: 'Bree Serif';

  background-color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  padding: 10px 40px;
`
