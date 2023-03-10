type SearchProps = {
    loaderUser: (userName: string) => Promise<void>
}

import styles from './Search.module.css'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
export function Search({loaderUser}: SearchProps) {
    
    const [userName, setUserName] = useState('')
    return(
        <div className={styles.search}>
            <h2>Busque por usuario:</h2>
            <p>Conheça os melhores repositorios</p>

            <div className={styles.search_container}>
                <input type="text" placeholder="Digite o nome do usuario" 
                onChange={(e) => setUserName(e.target.value)} />
                <button onClick={() => loaderUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}