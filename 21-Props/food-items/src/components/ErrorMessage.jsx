function ErrorMessage () {
      let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "milk", "fruit"];

return <>
{foodItems.length===0 && <h3>I am still hungry</h3> }</>
}

export default ErrorMessage;