import * as S from './styles'
import heroImg from './images/hero_image.png'
import { Button } from '../Button'

export const Hero = () => {

  return (
    <S.HeroSection>
      <S.HeroContainer className="container">
        <S.HeroTextContainer>
          <S.HeroTitle>
            Encontre os
            <S.HeroTitleEmphasis>
              Melhores Livros
            </S.HeroTitleEmphasis>
          </S.HeroTitle>
          <S.HeroSubtitle>
            Na nossa livraria online, você encontra obras que são verdadeiras portas para novas experiências e aventuras.
          </S.HeroSubtitle>
          <Button type='primary'>Comprar Agora</Button>
        </S.HeroTextContainer>
        <S.HeroImage src={heroImg}></S.HeroImage>
      </S.HeroContainer>
    </S.HeroSection>
  )
}