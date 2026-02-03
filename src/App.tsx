import './App.css'
import Examples from './Components/Examples'
import Header from './Components/Header'
import Home from './Components/Home'
import How from './Components/How'
import Limitations from './Components/Limitations'
import RoadMap from './Components/RoadMap'
import Technical from './Components/Technical'
import Test from './Components/Test'
import UseCases from './Components/UseCases'
import { AiProvider } from './Contexts/AiContext'

function App() {


  return (
    
      <AiProvider>
        <Header/>
        <main className='flex flex-col gap-0 w-full'>
        <Home/>
        <How/>
        <Examples/>
        <Test/>
        <UseCases/>
        <Limitations/>
        <RoadMap/>
        <Technical/>
        </main>
        </AiProvider>
      
  )
}

export default App
