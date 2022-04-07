import {
  // Nav,
  NavigationLink,
} from './Navigation.styled';

function Navigation() {
  return (
    <nav>
      {/* <Nav> */}
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/contacts">Contacts</NavigationLink>
      {/* </Nav> */}
    </nav>
  );
}

export default Navigation;
