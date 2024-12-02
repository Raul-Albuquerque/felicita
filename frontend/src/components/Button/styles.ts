import styled from 'styled-components';

export const SearchButton = styled.button`
  background-color: var(--green);
  font-size: 16px;
  padding: 12px;
  border: 1px solid transparent;
  border-radius: 0 8px 8px 0;
  color: var(--white);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const SearchButtonRounded = styled.button`
  background-color: var(--green);
  padding: 10px 12px;
  border-radius: 50%;
  border: none;

  i {
    color: var(--white) !important;
    font-size: 12px !important;
  }

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 1024px) {
    & {
      display: none;
    }
  }
`