import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='w-screen min-h-screen flex flex-col justify-between bg-white'>
      <Header />  
        <Outlet />
      <Footer />
    </div>
  )
}

export default App
