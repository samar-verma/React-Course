import styles from "./Item.module.css"
const Item =({foodItem, handleBuyButton}) => {
      
  // const  handleBuyButton = () => {
  //     alert(`${foodItem} added to cart`);
  //   };

return <li className='list-group-item'>{foodItem} <button class={`${styles.gk} btn btn-outline-danger`} 
        onClick={handleBuyButton}>Add</button></li>;
 
}

export default Item;