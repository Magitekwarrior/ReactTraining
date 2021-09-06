import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import {uiActions}  from '../../store/reducers/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    console.log('clicked');
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
