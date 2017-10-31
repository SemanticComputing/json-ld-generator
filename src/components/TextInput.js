import React from 'react';
import { func, string } from 'prop-types';
import { Input } from 'reactstrap';

const TextInput = ({ onChange, placeholder }) => {
  return (
    <div>
      <Input placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

TextInput.propTypes = {
  onChange: func,
  placeholder: string
};

export default TextInput;
