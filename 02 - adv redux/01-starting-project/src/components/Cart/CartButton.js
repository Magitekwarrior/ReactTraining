import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';

import {uiActions}  from '../../store/reducers/ui-slice';
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cartReducer.totalQty);
  console.log('cartQuantity', cartQuantity);

  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
