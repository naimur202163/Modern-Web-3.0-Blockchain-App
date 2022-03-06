import './App.css'
import { Footer, Navbar, Services, Transaction, Wellcome } from './components'
function App() {

  return (
        <div className='min-h-screen'>
            <div className='gradient-bg-wellcome'>
                <Navbar/>
                <Wellcome/>
              </div>
              <Services/>
              <Transaction/>
              <Footer/>
          </div>
  )
}

export default App
