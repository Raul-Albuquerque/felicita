import styled from "styled-components";

export const TopBar = styled.article`
  background-color: var(--purple);
  padding: 20px 0;
`

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 680px) {
    justify-content: center;
  }
`

export const TopbBarText = styled.h5`
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
`

