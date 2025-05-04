import Name from './components/Head'
import Input from './components/Inputs'
import List from './components/Todo'
import './App.css'

function App() {
  
  const data = [
    {name:"samar", age: 22},
    {name:"chirag", age: 21},
    {name:"shashi", age: 21},
    {name:"divesh", age: 20},
    {name:"aman", age: 22},
    
  ]

  return (
    <>
    <Name></Name>
    <Input></Input>
    <List a={data}></List>
    
 </>
  )
}

export default App
