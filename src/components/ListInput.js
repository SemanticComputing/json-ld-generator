import React from 'react';
import { func, string, array } from 'prop-types';
import { InputGroup, Input, InputGroupButton, Button } from 'reactstrap';
import { map, isEmpty } from 'lodash';

const ListInput = ({ onChange, placeholder, values = [] }) => {

  const handleChange = (value, index) => {
    let newValues = values.slice();
    if (!value) {
      newValues.splice(index, 1);
    } else {
      values.slice();
      newValues[index] = value;
    }
    newValues = isEmpty(newValues) ? undefined : newValues;
    return onChange(newValues);
  };

  const handleRemove = (index) => {
    return handleChange('', index);
  };

  const valuesList = map(values.concat(['']), (value, index) => (
    <InputGroup key={index}>
      <Input value={value} placeholder={placeholder} onChange={(e) => handleChange(e.target.value, index)} />
      {value ? <InputGroupButton><Button onClick={() => handleRemove(index)} color="danger">X</Button></InputGroupButton> : ''}
    </InputGroup>
  ));

  return (
    <div>
      {valuesList}
    </div>
  );
};

ListInput.propTypes = {
  onChange: func,
  onDelete: func,
  placeholder: string,
  values: array
};

export default ListInput;
