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
  padding: 7px 9px;
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

export const PrimaryBtn = styled.button`
  background-color: var(--purple);
  color: var(--white);
  border: none;
  font-size: 18px;
  font-weight: 400;
  padding: 16px 24px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width:640px) {
    width: 100%;
    display: block;
  }
`