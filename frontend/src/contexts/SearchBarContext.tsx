import { createContext } from 'react'

interface searchBarContextType {
  showSearchBar: boolean
  setShowSearchBar: (visible:boolean) => void
}

export const SearchBarContext = createContext<searchBarContextType | undefined>(undefined)