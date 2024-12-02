import { useContext } from 'react'
import { SearchBarContext } from '../contexts/SearchBarContext'

export const useSearchBar = () => {
  const context = useContext(SearchBarContext)

  if(!context) {
    throw new Error('useSearchBar must be used within a SearchBarProvider')
  }

  return context
}