import { AppContainer } from './styles/App.style'
import { Home } from './components/Home'

export function App() {
  return (
    <AppContainer>
        <h1>Pesquisa de usuários do github</h1>
        <Home />
    </AppContainer>
  )
}
