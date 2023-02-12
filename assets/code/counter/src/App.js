import {useState} from 'react'

import Instructions from './Instructions'
import Start from './Start'
import Solution from './Solution'

const App = () => {
  const [solutionVisible, setSolutionVisible] = useState(false)

  return (
    <div className='app'>
      <Instructions
        onClick={() => setSolutionVisible(!solutionVisible)}
        title='Counter'
        buttonText={solutionVisible ?  'Hide Solution' : 'Show Solution' }
      />

      <div className='work-area'>
        { solutionVisible ? <Solution /> : <Start /> }
      </div>
    </div>
  )
}

export default App