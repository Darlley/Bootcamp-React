import React, {useState, InputHTMLAttributes} from 'react'

function App(){

  const [inputValue, setInputValue] = useState('')
  console.log(`inputValue (estado): ${inputValue}`)

  function handleChange(event){
    const targetInputValue = Number(event.target.value)
    // console.log(`inputValue (component): ${targetInputValue}`)
    console.log(typeof targetInputValue)
    if(!isNaN(targetInputValue)){
      setInputValue(targetInputValue)
    }
  }
  function handleClick(){
    alert(inputValue)
  }

  return (
    <form>
      <input value={inputValue} onChange={handleChange} />
      <button type="" onClick={handleClick}>Enviar</button>
    </form>
  )
}

export default App
