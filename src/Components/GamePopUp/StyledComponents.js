import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  /* background-color: white; */
`
export const PopUpCloseBtn = styled.button`
  border: none;
  align-self: flex-end;
  cursor: pointer;
  padding: 5px 8px;
`

export const RulesImage = styled.img`
  width: 80%;
`
export const RulesButton = styled(PopUpCloseBtn)`
  background-color: white;

  font-family: 'Bree Serif';
  color: #223a5f;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
`
