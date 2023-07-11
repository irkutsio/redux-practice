import { Balance } from 'components/Balance/Balance';
import {useState } from 'react';
import { useDispatch} from 'react-redux';
import { deposit, withdraw } from 'redux/accountSlice';
import { getNewsThunk } from 'redux/news/thunk';


export const Account = () => {
  const [value, setValue] = useState();
  // const balance = useSelector(state => state)// так не делать, селекторы должны быть точечные, возвращают маленький кусочек стейта



  const dispatch = useDispatch();
const onChange = e => {
    setValue(Number(e.target.value));
  };


  return (
    <div>
      <Balance />
      <input type="number" value={value} onChange={onChange} />
      <button
        onClick={() => {
          if (!value) return;
          dispatch(deposit(value));
        }}
      >
        Deposit {value}$
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(value));
        }}
      >
        Witndraw {value}$
      </button>
      <button
        onClick={() => {
          dispatch(getNewsThunk());
        }}
      >
        thunk
      </button>
    </div>
  );
};
