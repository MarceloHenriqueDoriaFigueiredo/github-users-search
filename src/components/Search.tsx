import { useState, KeyboardEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Searchs, SearchContainer } from './Search.style'

type SearchProps = {
  loaderUser: (userName: string) => Promise<void>
}
export function Search({ loaderUser }: SearchProps) {
  const [userName, setUserName] = useState('')

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loaderUser(userName)
    }
  }
  return (
    <Searchs>
      <h2>Busque por um usuario:</h2>

      <SearchContainer>
        <input
          type="text"
          placeholder="Digite o nome do usuario"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={() => loaderUser(userName)}>
          <BsSearch />
        </button>
      </SearchContainer>
    </Searchs>
  )
}
