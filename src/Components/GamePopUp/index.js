import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  PopupContainer,
  PopUpCloseBtn,
  RulesImage,
  RulesButton,
} from './StyledComponents'

import 'reactjs-popup/dist/index.css'

const GameRulesPopUp = () => (
  <PopupContainer>
    <Popup
      modal
      trigger={<RulesButton type="button">RULES</RulesButton>}
      overlayStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}}
    >
      {close => (
        <>
          <PopupContainer>
            <PopUpCloseBtn onClick={() => close()} type="button">
              <RiCloseLine />
            </PopUpCloseBtn>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupContainer>
        </>
      )}
    </Popup>
  </PopupContainer>
)

export default GameRulesPopUp
