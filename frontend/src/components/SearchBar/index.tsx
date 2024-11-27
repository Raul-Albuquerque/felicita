import { Button } from '../Button'

import * as S from './styles'

export const SearchBar = () => {

  return (
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
  )
}