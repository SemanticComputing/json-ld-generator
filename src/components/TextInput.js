import React from 'react';
import { func, string, bool } from 'prop-types';
import { Input } from 'reactstrap';

const TextInput = ({ onChange, value, placeholder, valid }) => {
  return (
    <Input valid={valid} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
  );
};

TextInput.propTypes = {
  onChange: func,
  valid: bool,
  placeholder: string,
  value: string
};

export default TextInput;
