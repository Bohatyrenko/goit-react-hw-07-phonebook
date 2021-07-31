// import { findByLabelText } from '@testing-library/react';
import { NavLink } from 'react-router-dom';

const style = {
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  homeMenu: {
    margin: '10px',
  },
  registerMenu: {
    margin: '10px',
  },
};

const AppBar = () => {
  return (
    <nav style={style.navigation}>
      <div>
        <NavLink to="/" exact style={style.homeMenu}>
          Home
        </NavLink>

        <NavLink to="/phonebook" exact>
          Contacts
        </NavLink>
      </div>
      <div>
        <NavLink to="/register" exact style={style.registerMenu}>
          Register
        </NavLink>

        <NavLink to="/login" exact>
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default AppBar;
