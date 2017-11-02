import React from 'react';
import { func, string } from 'prop-types';
import { Input } from 'reactstrap';

const TextInput = ({ onChange, text, placeholder }) => {
  return (
    <div>
      <Input value={text} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

TextInput.propTypes = {
  onChange: func,
  placeholder: string,
  text: string
};

export default TextInput;
