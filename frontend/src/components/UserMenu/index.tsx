import * as S from './styles'
import { Tag } from '../Tag'

export const UserMenu = () => {

  return (
    <S.UserMenuNav>
      <ul>
        <S.MenuItemProfile>
          <div>
            <i className='bi bi-person-circle'></i>
          </div>
          <span>Minha Conta</span>
        </S.MenuItemProfile>
        <S.MenuItemCart>
          <div>
            <i className='bi bi-handbag'></i>
            <Tag type='cart'>10</Tag>
          </div>
          <span>Meu Carrinho</span>
        </S.MenuItemCart>
      </ul>
    </S.UserMenuNav>
  )
}