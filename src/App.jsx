import { useState } from 'react'
import { Homepage } from './pages/Homepage'
import { Quiz } from './pages/Quiz'

function App() {
  const [playing, setPlaying] = useState(false)
  return <div>{playing ? <Quiz /> : <Homepage onStart={setPlaying} />}</div>
}

export default App
