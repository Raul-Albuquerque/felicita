import { Tag } from '../Tag'
import { Button } from '../Button'

import * as S from './styles'

export const UserMenu = () => {

  return (
    <S.UserMenuNav>
      <ul>
        <Button type='searchRounded'  />
        <S.MenuItemProfile>
          <div>
            <i className='bi bi-person-circle'></i>
          </div>
          <S.MenuItemTitle>Minha Conta</S.MenuItemTitle>
        </S.MenuItemProfile>
        <S.MenuItemCart>
          <div>
            <i className='bi bi-handbag'></i>
            <Tag type='cart'>10</Tag>
          </div>
          <S.MenuItemTitle>Meu Carrinho</S.MenuItemTitle>
        </S.MenuItemCart>
      </ul>
    </S.UserMenuNav>
  )
}