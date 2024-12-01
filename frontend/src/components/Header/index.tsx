import { SearchBar } from '../SearchBar'
import { UserMenu } from '../UserMenu'

import * as S from './styles'

export const Header = () => {

  return (
    <S.HeaderContainer className='container'>
      <S.Logo href='#'>
        <img src='/logo.png' alt='Felicità logo' />
      </S.Logo>
      <SearchBar />
      <UserMenu />      
    </S.HeaderContainer>
  )
}