// import { Container } from './AuthNav.styled';
import { NavigationLink } from '../Navigation/Navigation.styled';

function AuthNav() {
  return (
    <div>
      {/* <Container> */}
      <NavigationLink to="/register">Sign Up</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
      {/* </Container> */}
    </div>
  );
}

export default AuthNav;
