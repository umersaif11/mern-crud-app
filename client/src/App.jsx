import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={}></Route>
          <Route path='/create' element={}></Route>
          <Route path='/update' element={}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
