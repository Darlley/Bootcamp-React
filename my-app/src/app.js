function App(){
  return (
    <>
    <Title><h1>Bootcamp ReactJS</h1></Title>
    <Title2><h1>Darlley Brasil de Brito Furtado</h1></Title2>
    <Sidebar />
    <Content />
    </>
  )
}

function Title({ children }){
  return (<h1 id="title">{ children }</h1>)
}

function Title2({ children }){
  return (<h2>{children}</h2>)
}

function Sidebar(){
  return (<aside>Sidebar</aside>)
}

function Content(){
  return (<section>Content</section>)
}


export default App;