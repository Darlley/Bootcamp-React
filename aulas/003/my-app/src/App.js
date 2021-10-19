import React from 'react'

function App(){
  return (
    <Title>
      <span>Texto tag</span>
      texto
      {['um', 'dois', 3, false, <h1>Texto tag</h1>]}
    </Title>
  )
}

function Title(props){
  return (
    <div>
      {props.children}
    </div>
  )
}

export default App
