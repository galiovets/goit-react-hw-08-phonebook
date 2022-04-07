import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
// import { FilterLabel, FilterInput } from './Filter.styled';
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
        {/* Find contacts by name */}
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
