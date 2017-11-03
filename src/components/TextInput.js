import React from 'react';
import { func, string } from 'prop-types';
import { Input } from 'reactstrap';

const TextInput = ({ onChange, value, placeholder, isValid }) => {
  isValid = isValid || (() => undefined);

  return (
    <Input valid={isValid(value)} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
  );
};

TextInput.propTypes = {
  onChange: func,
  isValid: func,
  placeholder: string,
  value: string
};

export default TextInput;
