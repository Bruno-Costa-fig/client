import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AulasAgendadas from './pages/AulasAgendadas/index.jsx'
import Home from './pages/Home/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<Home />}/>
                <Route path='/aulas-agendadas' element={<AulasAgendadas />}/>
            </Route>
        </Routes>    
    </BrowserRouter>
)
