import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {cartActions}  from '../../store/reducers/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, quantity, total, price } = props.item;

  const addQtyHandler = () => {
    dispatch(cartActions.addCartItem({
      id: id,
      title: title, 
      price: price, 
      qty: 1, 
    })); // payload: newItem
  }

  const removeQtyHandler = () => {
    dispatch(cartActions.removeCartItem(id)); // payload: newItem
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeQtyHandler}>-</button>
          <button onClick={addQtyHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
