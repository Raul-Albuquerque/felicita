import { ReactNode, useState } from 'react'

import { SearchBarContext } from './SearchBarContext'

interface SearchBarProviderProps {
  children: ReactNode
}

export const SearchBarProvider = ({ children }: SearchBarProviderProps) => {
  const [showSearchBar, setShowSearchBar] = useState(false)

  return <SearchBarContext.Provider value={{ showSearchBar, setShowSearchBar }}>{children}</SearchBarContext.Provider>
}