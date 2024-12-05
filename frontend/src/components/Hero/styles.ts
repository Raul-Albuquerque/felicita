import styled from 'styled-components'

export const HeroSection = styled.section`
  background-image: url('/hero-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 520px;
  height: 100%;
  padding: 80px 0;
`

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1160px) {
    justify-content: center;
  }
`

export const HeroImage = styled.img`
  max-width: 560px;
  width: 100%;

  @media (max-width: 1160px) {
    display: none;
  }
`

export const HeroTextContainer = styled.article`
  max-width: 380px;
  width: 100%;

  @media (max-width:1160px) {
    text-align: center;
  }
`

export const HeroTitle = styled.h2`
  font-size: 52px;
  font-weight: 300;
  line-height: 1.2em;

  @media (max-width: 680px) {
    font-size: 46px;
  }
`

export const HeroTitleEmphasis = styled.span`
  display: block;
  font-weight: 400;
  background: linear-gradient(to right, #8D40D7, #36D681);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const HeroSubtitle = styled.h3`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4em;
  margin-top: 16px;
  margin-bottom: 24px;
`