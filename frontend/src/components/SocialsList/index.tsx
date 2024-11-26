import * as S from './styles'

export const SocialsList = () => {

  return (
    <S.SocialListContainer>
      <S.SocialListItem>
        <S.SocialListLink href="">
          <i className="bi bi-twitter-x"></i>
        </S.SocialListLink>
      </S.SocialListItem>
      <S.SocialListItem>
        <S.SocialListLink href="">
          <i className="bi bi-whatsapp"></i>
        </S.SocialListLink>
      </S.SocialListItem>
      <S.SocialListItem>
        <S.SocialListLink href="">
          <i className="bi bi-facebook"></i>
        </S.SocialListLink>
      </S.SocialListItem>
      <S.SocialListItem>
        <S.SocialListLink href="">
          <i className="bi bi-instagram"></i>
        </S.SocialListLink>
      </S.SocialListItem>
    </S.SocialListContainer>
  )
}