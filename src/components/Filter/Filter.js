import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { filterChange } from 'redux/contacts/contacts-actions';
import {
  FormStyled,
  FormLabel,
  FormInput,
} from 'components/Form/Form.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    dispatch(filterChange(evt.target.value));
  };

  return (
    <FormStyled>
      <FormLabel>
        <FormInput
          type="text"
          name="name"
          placeholder="Find contacts by name"
          value={filter}
          onChange={onChangeFilter}
        />
      </FormLabel>
    </FormStyled>
  );
};

export default Filter;
