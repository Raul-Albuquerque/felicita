import styled from 'styled-components'

export const UserMenuNav = styled.nav`
  ul, li {
    display: flex;
    justify-content: end;
  }

  ul {
    align-items: end;
    gap: 10px;
    cursor: pointer;
  }

  li {
    list-style: none;
    align-items: center;
    flex-direction: column;

    &:hover {
      opacity: 0.6;
    }
  }
  
  i {
    font-size: 28px;
    color: var(--dark-gray);

    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }
`

export const MenuItemProfile = styled.li``

export const MenuItemCart = styled.li`

  i {
    font-size: 28px;

    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }

  div {
    position: relative;
  }
`

export const MenuItemTitle = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--dark-gray);

  @media (max-width: 1024px) {
    font-size: 10px;
  }
`

