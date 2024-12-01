import styled from 'styled-components'

export const SocialListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;

  li {
    list-style: none;
  }

  @media (max-width: 1160px) {
    display: none;
  }
`
export const SocialListLink = styled.a`
  
  img {
    width: 24px;

    &:hover {
      opacity: 0.7;
    }
  }
`