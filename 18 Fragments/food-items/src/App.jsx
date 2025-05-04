
// import './App.css'

function App() {
  
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "milk"];

  return (
    <>
    <h1>Healthy Food</h1>
    {foodItems.length === 0 && <h3>I am still hungry</h3> }
    <ul className='list-group'>
      {foodItems.map((item) => (
        <li key={item} className='list-group-item'>{item}</li>
      ))}
    </ul>
    </>
  );
}

export default App
