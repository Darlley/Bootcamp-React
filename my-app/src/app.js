import {useState} from "react"

export default function App() {
  const [value, setValue] = useState(null);
  const [name, setName] = useState(null)

  function somar(){
    setValue(value+1)
  }
  function subtrair(){
    setValue(value-1)
  }
  function falar(){
    setName("Olá Darlley")
  }

  return (
    <>
    <div>
      <p>{name}</p>
      <button onClick={falar}>Falar</button>
    </div>
    <div>
      {value === null ? <h1>Contador vazio</h1> : <h1>Contador: {value}</h1> }
      <h1>{value === null ? 'Contador vazio' : `Contador: ${value}` }</h1>

      <h1>
        {value === null && "Contador vazio"}
        {value !== null && `Contador: ${value}`}
      </h1>

      <h1>
        {!value && "Contador vazio"}
        {!!value && `Contador: ${value}`}
      </h1>

      <button onClick={somar}>+</button>
      <button onClick={subtrair}>-</button>
    </div>
    </>
  )
}
