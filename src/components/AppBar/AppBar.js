import { useSelector } from 'react-redux';
import { Container } from './AppBar.styled';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
}

export default AppBar;
