import './App.css'
import Loading from './components/Loading'
import Error from './components/Error'
import Data from './components/Data'

function App() {

  return <> 
      <Loading url={"http://localhost:7070/loading"}/>
      <Error url={"http://localhost:7070/error"}/>
      <Data url={"http://localhost:7070/data"}/>
  </>
}

export default App
