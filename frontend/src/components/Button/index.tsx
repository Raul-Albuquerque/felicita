import { useSearchBar } from '../../hooks/useSearchBar'

import * as S from './styles'

export type Props = {
  type: 'search' | 'searchRounded' | 'primary'
  children?: string
  url?: string
}

export const Button = ({type, children, url}: Props) => {

  const { showSearchBar, setShowSearchBar } = useSearchBar()

  return (
    <>
    {type === 'search' ? (
      <S.SearchButton>
        <i className="bi bi-search"></i>
      </S.SearchButton>
    ) : type === 'searchRounded' ? (
      <S.SearchButtonRounded onClick={ () => setShowSearchBar(!showSearchBar)}>
        <i className="bi bi-search"></i>
      </S.SearchButtonRounded>
    ) : type === 'primary' ? (
      <S.PrimaryBtn>{children}</S.PrimaryBtn>
    ) : (
      <button>btn secondary</button>
    )}
    </>
  )
}