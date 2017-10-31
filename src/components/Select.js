import React from 'react';
import { func, string, array } from 'prop-types';
import { map } from 'lodash';
import { Input } from 'reactstrap';

const TextInput = ({ onChange, options }) => {
  return (
    <div>
      <Input type="select" onChange={(e) => onChange(e.target.value)}>
        {map(options, (option) => <option value={option.id}>{option.name}</option>)}
      </Input>
    </div>
  );
};

TextInput.propTypes = {
  onChange: func,
  placeholder: string,
  options: array
};

export default TextInput;
