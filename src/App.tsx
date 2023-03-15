import styles from './App.module.css'
import { Home } from './components/Home'

export function App() {
  return (
    <div className={styles.app}>
        <h1>Pesquisa de usuários do github</h1>
        <Home />
    </div>
  )
}
