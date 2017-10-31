import React from 'react';
import { object } from 'prop-types';

const JsonLdDisplay = ({ jsonld }) => {
  return (
    <pre>{JSON.stringify(jsonld, null, 2)}</pre>
  );
};

JsonLdDisplay.propTypes = {
  jsonld: object
};

export default JsonLdDisplay;
