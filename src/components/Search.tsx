type SearchProps = {
    loaderUser: (userName: string) => Promise<void>
}

import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
export function Search({loaderUser}: SearchProps) {
    
    const [userName, setUserName] = useState('')
    return(
        <div>
            <h2>Busque por usuario:</h2>
            <p>Conheça os melhores repositorios</p>

            <div>
                <input type="text" placeholder="Digite o nome do usuario" 
                onChange={(e) => setUserName(e.target.value)} />
                <button onClick={() => loaderUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}