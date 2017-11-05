import React from 'react';
import { func, string } from 'prop-types';
import TextInput from './TextInput';
import validators from '../lib/validators';

const UrlInput = ({ onChange, value, placeholder }) => {
  return (
    <TextInput valid={validators.isValidUrl(value)} value={value} placeholder={placeholder} onChange={onChange} />
  );
};

UrlInput.propTypes = {
  onChange: func,
  placeholder: string,
  value: string
};

export default UrlInput;
