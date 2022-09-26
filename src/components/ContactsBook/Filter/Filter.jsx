import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { Lable, Input } from '../Form/Form.styled';
import { changeFilter } from 'redux/actions';

export const Filter = () => {
  const filterContact = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Lable>
      Find contacts by name
      <Input type="text" value={filterContact} onChange={handleChangeFilter} />
    </Lable>
  );
};
