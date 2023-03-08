import styles from './App.module.css'
import { Home } from './components/Home'

export function App() {
  return (
    <div className={styles.app}>
        <h1>Github Search</h1>
        <Home />
    </div>
  )
}
