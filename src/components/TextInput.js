import React from 'react';
import { func, string } from 'prop-types';
import { Input } from 'reactstrap';

const TextInput = ({ onChange, text, placeholder, isValid }) => {
  isValid = isValid || (() => undefined);

  return (
    <Input valid={isValid(text)} value={text} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
  );
};

TextInput.propTypes = {
  onChange: func,
  isValid: func,
  placeholder: string,
  text: string
};

export default TextInput;
