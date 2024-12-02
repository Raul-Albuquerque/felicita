import { Button } from '../Button'

import * as S from './styles'

export type Props = {
  type: 'desktop' | 'mobile'
}

export const SearchBar = ({ type }:Props) => {

  return (
    <>
    {type === 'desktop' ? (
      <S.SearchBarContainer>
        <S.CategoriesSelect>
          <option selected>Categorias</option>
          <option value='games'>Games</option>
          <option value='camisetas'>Camisetas</option>
          <option value='livros'>Livros</option>
          <option value='canecas'>Canecas</option>
          <option value='brinquedos'>Brinquedos</option>
        </S.CategoriesSelect>
        <S.SearchInput placeholder='Pesquisar pelo nome' />
        <Button type='search' />
      </S.SearchBarContainer>
    ) : (
      <S.SearchBarContainerMobile>
        <S.CategoriesSelect>
          <option selected>Categorias</option>
          <option value='games'>Games</option>
          <option value='camisetas'>Camisetas</option>
          <option value='livros'>Livros</option>
          <option value='canecas'>Canecas</option>
          <option value='brinquedos'>Brinquedos</option>
        </S.CategoriesSelect>
        <S.SearchInput placeholder='Pesquisar pelo nome' />
        <Button type='search' />
      </S.SearchBarContainerMobile>
    )}
    </>
  )
}