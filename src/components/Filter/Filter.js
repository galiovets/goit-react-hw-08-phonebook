import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    dispatch(filterChange(evt.target.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="name"
        value={filter}
        onChange={onChangeFilter}
      ></FilterInput>
    </FilterLabel>
  );
};

export default Filter;
