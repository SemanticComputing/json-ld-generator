import React from 'react';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import JsonLdDisplay from '../components/JsonLdDisplay';
import { updateOrganization } from '../actions';
import { object, func } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

let Organization = ({ updateOrganization, jsonld }) => {

  return (
    <Container>
      <Row>
        <Col>
          <h2>Organisaatio</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput placeholder={'Nimi'} onChange={(name) => updateOrganization({ name })} />
          <TextInput placeholder={'Vaihtoehtoinen nimi'} onChange={(alternateName) => updateOrganization({ alternateName })} />
          <TextInput placeholder={'Verkko-osoite'} onChange={(url) => updateOrganization({ url })} />
          <TextInput placeholder={'Logo (verkko-osoite)'} onChange={(logo) => updateOrganization({ logo })} />
        </Col>
        <Col>
          <JsonLdDisplay jsonld={jsonld} />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  jsonld: state.organization
});

const mapDispatchToProps = ({
  updateOrganization
});

Organization = connect(
  mapStateToProps,
  mapDispatchToProps
)(Organization);

Organization.propTypes = {
  jsonld: object,
  updateOrganization: func
};

export default Organization;
