import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

import EstiloGlobal, { Container } from './styles'
import store from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
