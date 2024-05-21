import BotaoAdicioar from '../../components/BotaoAdicionar'
import BarraLateral from '../../container/BarraLateral'
import ListaDeTarefas from '../../container/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostraFiltros />
    <ListaDeTarefas />
    <BotaoAdicioar />
  </>
)

export default Home
