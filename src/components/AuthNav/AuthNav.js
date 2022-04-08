import { NavigationLink } from '../Navigation/Navigation.styled';

function AuthNav() {
  return (
    <div>
      <NavigationLink to="/register">Sign Up</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </div>
  );
}

export default AuthNav;
