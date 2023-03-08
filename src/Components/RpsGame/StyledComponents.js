import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 500px) {
    justify-content: space-between;
  }
`
export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const AllChoicesContainer = styled.div`
  width: 50%;
  display: ${param => (param.isPlaying ? 'flex' : 'none')};

  flex-direction: column;
  max-height: 400px;
`

export const ResultViewContainer = styled(AllChoicesContainer)`
  display: ${props => (props.isPlaying ? 'none' : 'flex')};
  flex-direction: row;
`
