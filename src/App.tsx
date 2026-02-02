import './App.css'
import Examples from './Components/Examples'
import Header from './Components/Header'
import Home from './Components/Home'
import How from './Components/How'
import Test from './Components/Test'
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
        
        </main>
        </AiProvider>
      
  )
}

export default App
