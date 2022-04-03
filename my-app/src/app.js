
const App = () => {

  function handleClick(){
    alert('Clicou')
  }

  return (
    <button onClick={handleClick}>Clique aqui</button>
  )
}

export default App;