import './styles/global.css'

import { Habit } from "./components/Habit"


const App = () => {
  return(
    <>
    <Habit completed={3}/>
    <Habit completed={1}/>
    <Habit completed={2}/>
    </>
  )
}

export default App