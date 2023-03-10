type SearchProps = {
    loaderUser: (userName: string) => Promise<void>
}

import styles from './Search.module.css'
import { useState, KeyboardEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
export function Search({loaderUser}: SearchProps) {
    
    const [userName, setUserName] = useState('')

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            loaderUser(userName)
        }
    }
    return(
        <div className={styles.search}>
            <h2>Busque por usuario:</h2>
            <p>Conheça os melhores repositorios</p>

            <div className={styles.search_container}>
                <input type="text" 
                placeholder="Digite o nome do usuario" 
                onChange={(e) => setUserName(e.target.value)} 
                onKeyDown={handleKeyDown}
                />
                
                <button onClick={() => loaderUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}