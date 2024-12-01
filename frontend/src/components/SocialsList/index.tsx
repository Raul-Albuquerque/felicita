import * as S from './styles'

import xIcon from './icons/x.svg'
import whatsIcon from './icons/whats.svg'
import faceIcon from './icons/face.svg'
import instaIcon from './icons/insta.svg'

export const SocialsList = () => {

  return (
    <S.SocialListContainer>
      <li>
        <S.SocialListLink href="">
          <img src={xIcon} alt="X Icon" />
        </S.SocialListLink>
      </li>
      <li>
        <S.SocialListLink href="">
          <img src={whatsIcon} alt="Whatsapp Icon" />
        </S.SocialListLink>
      </li>
      <li>
        <S.SocialListLink href="">
          <img src={faceIcon} alt="Facebook Icon" />
        </S.SocialListLink>
      </li>
      <li>
        <S.SocialListLink href="">
          <img src={instaIcon} alt="Instagram Icon" />
        </S.SocialListLink>
      </li>
    </S.SocialListContainer>
  )
}