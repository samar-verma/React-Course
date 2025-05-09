import Item from "./Item";

function FoodItems({item}) {
    // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "milk", "fruit"];
    
return ( <ul className='list-group'>
    {item.map((items, index) => (
      <Item foodItem={items} handleBuyButton={() => {
        alert(`${items} added to cart`);
      }}></Item>
      
    ))}
  </ul>
  );
   

};

export default FoodItems;