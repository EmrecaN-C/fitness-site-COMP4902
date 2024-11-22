import { useState } from 'react'
import './App.css'
import Mainpage from './Mainpage'
import Exercises from './Exercises'
import Chest from './Chest'
import Shoulder from './Shoulder'
import Biceps from './Biceps'
import Triceps from './Triceps'
import Forearms from './Forearms'
import Back from './Back'
import Hamstrings from './Hamstrings'
import Quads from './Quads'
import Calves from './Calves'
import Abs from './Abs'
import DumbellBPress from './DumbellBPress'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>

    <Routes>
      <Route path='/' element={<Mainpage/>}></Route>
      <Route path='/exercises' element={<Exercises/>}></Route>
      <Route path='/chestExercises' element={<Chest/>}></Route>
      <Route path='/shoulderExercises' element={<Shoulder/>}></Route>
      <Route path='/bicepsExercises' element={<Biceps/>}></Route>
      <Route path='/tricepsExercises' element={<Triceps/>}></Route>
      <Route path='/forearmsExercises' element={<Forearms/>}></Route>
      <Route path='/backExercises' element={<Back/>}></Route>
      <Route path='/hamstringsExercises' element={<Hamstrings/>}></Route>
      <Route path='/quadsExercises' element={<Quads/>}></Route>
      <Route path='/calvesExercises' element={<Calves/>}></Route>
      <Route path='/absExercises' element={<Abs/>}></Route>
      <Route path='/dumbell-bench-press' element={<DumbellBPress/>}></Route>

    </Routes>
    

    

    
   </div>
  )
}

export default App
