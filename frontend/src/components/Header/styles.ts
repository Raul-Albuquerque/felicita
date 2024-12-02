import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 ;
`

export const HeaderSearchMobile = styled.div``

export const Logo = styled.a`

  @media (max-width: 1024px) {
    img {
      max-width: 120px;
      width: 100%;
    }
  }

`