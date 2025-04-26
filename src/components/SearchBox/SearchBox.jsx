import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

const initialStateFilter = {
  name: '',
};
const SearchBox = () => {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handelInputSearch = event => {
    dispatch(setFilter(event.target.value));
  };

  const cleanInput = () => {
    dispatch(setFilter(initialStateFilter.name));
  };

  return (
    <div className={css.container}>
      <p className={css.inputText}>Find contacts by name</p>
      <div className={css.container}>
        <input className={css.formInput} type='text' value={searchValue} onChange={handelInputSearch} />
        <button className={css.cleanButton} onClick={cleanInput}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
