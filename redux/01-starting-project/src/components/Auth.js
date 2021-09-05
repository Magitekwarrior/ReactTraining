import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {authActions}  from '../store/reducers/auth';

const Auth = () => {
  const dispatch = useDispatch(); // init

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
