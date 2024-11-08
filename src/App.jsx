import { useState } from 'react'
import './App.css'
import Mainpage from './Mainpage'
import Exercises from './Exercises'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>

    <Routes>
      <Route path='/' element={<Mainpage/>}></Route>
      <Route path='/exercises' element={<Exercises/>}></Route>
    </Routes>
    

    

    
   </div>
  )
}

export default App
