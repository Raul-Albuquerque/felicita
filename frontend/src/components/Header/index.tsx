import { SearchBar } from '../SearchBar'
import { UserMenu } from '../UserMenu'
import { useSearchBar } from '../../hooks/useSearchBar'

import * as S from './styles'

export const Header = () => {

  const { showSearchBar } = useSearchBar()

  return (
    <>
    <S.HeaderContainer className='container'>
      <S.Logo href='#'>
        <img src='/logo.png' alt='Felicità logo' />
      </S.Logo>
      <SearchBar type='desktop' />
      <UserMenu />      
    </S.HeaderContainer>
    {showSearchBar === true && 
        <S.HeaderSearchMobile className='container'>
        <SearchBar type='mobile' />
      </S.HeaderSearchMobile>}
    </>
  )
}