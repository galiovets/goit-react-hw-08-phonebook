import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavigationLink } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && (
        <NavigationLink to="/contacts">Contacts</NavigationLink>
      )}
    </nav>
  );
}

export default Navigation;
