import { useRef } from 'react';

import classes from './input.module.css';

const Input: React.FC<{ onSearch: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const searchHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const enteredText = inputRef.current!.value;
    props.onSearch(enteredText);
  };

  return (
    <div className={classes.input}>
      <input
        type='text'
        ref={inputRef}
        placeholder='search'
        onChange={searchHandler}
        className={classes.search}
      />
    </div>
  );
};

export default Input;
