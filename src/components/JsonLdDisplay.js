import React from 'react';
import { object } from 'prop-types';

const JsonLdDisplay = ({ jsonld }) => {
  return (
    <pre>
      {'<script type="application/ld+json">'}
      <br />
      {JSON.stringify(jsonld, null, 2)}
      <br />
      {'</script>'}
    </pre>
  );
};

JsonLdDisplay.propTypes = {
  jsonld: object
};

export default JsonLdDisplay;
