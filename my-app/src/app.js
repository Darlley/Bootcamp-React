// const lista = [1,2,3]
const lista = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Sobre",
    link: "/sobre"
  }
]

function App(){
  return (
    <ul>
      {lista.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default App;