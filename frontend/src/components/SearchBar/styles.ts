import styled from 'styled-components'

export const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
`

export const CategoriesSelect = styled.select`
  padding: 12px 20px;
  border-radius: 8px 0 0 8px;
  background-color: var(--select-bg);
  border: 1px solid var(--black);
  font-size: 16px;
  color: var(--text-gray);
`

export const SearchInput = styled.input`
  max-width: 600px;
  width: 100%;
  padding: 12px 10px;
  border: 1px solid rgba(0,0,0,0.15);
  color: var(--text-gray);
  font-size: 16px;
  font-weight: 300;
`