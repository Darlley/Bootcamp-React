import { useState } from 'react'

function App() {
  const [inputValue, setInput] = useState('')
  console.log('valor input: ', inputValue)

  function handleChange(e){
    setInput(e.target.value)
    console.log('valor do estado: ', e.target.value)
  }

  return (
    <div>
      <form>
        <input value={inputValue} onChange={handleChange} />
        <button>Enviar</button>
      </form>

      {inputValue !== "" && <div>
        <p>{inputValue}</p>
      </div>}
    </div>
  )
}

export default App
