import styles from "./Item.module.css"
const Item =({foodItem}) => {
      
  const  hello = () => {
      alert(`${foodItem} added to cart`);
    };

return <li className='list-group-item'>{foodItem} <button class={`${styles.gk} btn btn-outline-danger`}  onClick={hello}>Add</button></li>;
 
}

export default Item;