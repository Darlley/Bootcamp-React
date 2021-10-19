import React from 'react'

function Title(props){
  return (
    <React.Fragment>
      <h1>{props.children} 1</h1>
      <h2>{props.children} 2</h2>
    </React.Fragment>
  )
}

function App({children}){

  return (
    <div>
      <Title>Meu app</Title>
    </div>
  )
}

export default App
