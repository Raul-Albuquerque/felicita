import * as S from './styles'

export type Props = {
  type: 'search' | 'primary'
  children?: string
  url?: string
}

export const Button = ({type, children, url}: Props) => {
  return (
    <>
    {type === 'search' ? (
      <S.SearchButton><i className="bi bi-search"></i></S.SearchButton>
    ) : (
      <button>Botao primário</button>
    )}
    </>
  )
}