import styled from "styled-components"

export const SocialListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;

  @media (max-width: 1160px) {
    display: none;
  }
`

export const SocialListItem = styled.li`
  list-style: none;
`

export const SocialListLink = styled.a`
  color: var(--purple);
  font-size: 20px;
  background-color: var(--white);
  border-radius: 50%;
  padding: 4px 6px;

  &:hover {
    color: var(--green);
  }
`