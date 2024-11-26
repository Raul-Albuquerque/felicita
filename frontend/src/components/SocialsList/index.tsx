import * as S from './styles'

export const SocialsList = () => {

  return (
    <S.SocialListContainer>
      <li>
        <S.SocialListLink href="">
          <i className="bi bi-twitter-x"></i>
        </S.SocialListLink>
      </li>
      <li>
        <S.SocialListLink href="">
          <i className="bi bi-whatsapp"></i>
        </S.SocialListLink>
      </li>
      <li>
        <S.SocialListLink href="">
          <i className="bi bi-facebook"></i>
        </S.SocialListLink>
      </li>
      <li>
        <S.SocialListLink href="">
          <i className="bi bi-instagram"></i>
        </S.SocialListLink>
      </li>
    </S.SocialListContainer>
  )
}