import * as S from './styles'

import { SocialsList } from '../SocialsList'

export const TopBar = () => {

  return (
    <S.TopBar>
      <S.TopBarContainer className="container">
        <S.TopbBarText>
          Frete grátis para todo o Brasil
          <i className="bi bi-truck ml"></i>
        </S.TopbBarText>
        <S.TopbBarText className="desktop_only">
          Descontos de até 50% por tempo limitado!
        </S.TopbBarText>
        <SocialsList />
      </S.TopBarContainer>
    </S.TopBar>
  )
}