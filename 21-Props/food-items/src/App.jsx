import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import Box from "./components/Box";
import Input from "./components/InputItem";
function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "milk", "fruit", "pulses"];



 return (
 <>
<Box>
   <h1>Healthy Foods</h1>
   <Input></Input>
   <ErrorMessage></ErrorMessage>
   <FoodItems item={foodItems}></FoodItems>
</Box>
<Box>
   <p>hello my name is samar verma</p>
</Box>
 </>
 );
}
export default App;
