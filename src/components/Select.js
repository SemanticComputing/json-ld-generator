import React from 'react';
import { func, string, array } from 'prop-types';
import { map } from 'lodash';
import { Input } from 'reactstrap';

const Select = ({ onChange, options }) => {
  return (
    <Input type="select" onChange={(e) => onChange(e.target.value)}>
      {map(options, (option) => <option key={option.id} value={option.id}>{option.name}</option>)}
    </Input>
  );
};

Select.propTypes = {
  onChange: func,
  placeholder: string,
  options: array
};

export default Select;
