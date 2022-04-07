import { useSelector, useDispatch } from 'react-redux';
import {
  // Container,
  UserText,
  Button,
} from './UserMenu.styled';
import { getUser } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

function UserMenu() {
  const name = useSelector(getUser);
  const dispatch = useDispatch();
  return (
    // <Container>
    <div>
      <UserText>Welcome, {name}</UserText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </div>
    // </Container>
  );
}

export default UserMenu;
