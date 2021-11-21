import React, {useEffect, useState} from 'react';

function Root(){
  return <App />
}

function App(){
  const [counter, setCounter] = useState(0)
  console.log('1) Inicio da montagem do componente')

  useEffect(() => {
    document.title = 'New title'
    console.log('5) seção - efeitos colaterais')

    const id = setInterval(() => {
      //setCounter(c => c + 1)
      console.log('3) efeito colateral')
    }, 1000)

    return () => {
      clearInterval(id)
      console.log('4) limpando efeitos colaterais')
    }
  })

  console.log('2) Preparando para montar o componente')
  return (
    <React.Fragment>
      <h1>App</h1>
      <h3>{counter}</h3>
      <button onClick={() => counter<10 && setCounter(c => c+1)}>+</button>
      <button onClick={() => counter>0 && setCounter(c => c-1)}>-</button>
    </React.Fragment>
  )
}

export default Root
