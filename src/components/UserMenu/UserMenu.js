import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { UserText, Button } from './UserMenu.styled';
import { logOut } from 'redux/auth/auth-operations';

function UserMenu() {
  const name = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <div>
      <UserText>Welcome, {name}</UserText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </div>
  );
}

export default UserMenu;
