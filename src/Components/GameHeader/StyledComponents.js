import styled from 'styled-components'

export const HeaderBox = styled.div`
  border: 2px solid #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 90%;
  }
`

export const HeaderTextBox = styled.div`
  width: 50px;
  background-color: transparent;
`
export const HeaderText = styled.p`
  font-size: 20px;
  font-family: 'Bree Serif';
  color: white;
  font-weight: 500;
  margin: 0px;
`
export const HeaderTag = styled.h1`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: white;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`

export const HeaderScoreBox = styled.div`
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
`
export const HeaderScoreText = styled(HeaderText)`
  color: #223a5f;

  font-family: 'Bree Serif';
`

export const HeaderScoreNumber = styled(HeaderText)`
  font-size: 25px;
  font-weight: bold;
  color: #223a5f;
  font-family: 'Roboto';
`
