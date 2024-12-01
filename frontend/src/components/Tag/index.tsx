import * as S from './styles'

export type Props = {
  type: 'cart' | 'discount'
  children: string
}

export const Tag = ({ type, children }:Props) => {

  return (
    <>
    {type === 'cart' ? (
      <S.CartTag>{children}</S.CartTag>
    ) : (
      <span>20%</span>
    )}
    </>
  )
}