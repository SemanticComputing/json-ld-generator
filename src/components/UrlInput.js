import React from 'react';
import { func, string } from 'prop-types';
import TextInput from './TextInput';

const UrlInput = ({ onChange, value, placeholder }) => {
  const isValidUrl = (value) => {
    if (!value)
      return undefined;
    let a  = document.createElement('a');
    a.href = value;
    return !!(a.host && a.host !== window.location.host);
  };

  return (
    <TextInput isValid={isValidUrl} text={value} placeholder={placeholder} onChange={onChange} />
  );
};

UrlInput.propTypes = {
  onChange: func,
  placeholder: string,
  value: string
};

export default UrlInput;
