import { useState } from 'react';

function useInput() {
  const [value, setValue] = useState('');
  function handleChange({ target }) {
    setValue(target.value);
  }

  return [value, handleChange];
}

export default useInput;