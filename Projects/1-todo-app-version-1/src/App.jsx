import Head from "./components/Head";
import RowOne from "./components/Row-one";
import RowTwo from "./components/RowTwo";
import RowThree from "./components/RowThree";
import "./App.css";
function App() {

  return <center class='todo=container'>
  <div class="container"> 
    
    <Head></Head>
<div class = "item-container">
<RowOne></RowOne>

 <RowTwo></RowTwo>
 
 <RowThree></RowThree>

</div>
  

</div>
  </center>
}

export default App;