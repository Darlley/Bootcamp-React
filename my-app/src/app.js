import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)
  // const counter = state[0]
  // const setState = state[1]

  function incrementar(){
    setCounter(counter + 1)
  }

  function decrementar(){
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </>
  )
}

export default App;