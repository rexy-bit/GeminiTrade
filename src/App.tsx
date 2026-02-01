import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import How from './Components/How'

function App() {


  return (
      <>
        <Header/>
        <main className='flex flex-col gap-0 w-full'>
        <Home/>
        <How/>
        </main>
      </>
  )
}

export default App
