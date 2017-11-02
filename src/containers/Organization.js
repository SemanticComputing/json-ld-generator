import React from 'react';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import ListInput from '../components/ListInput';
import Select from '../components/Select';
import JsonLdDisplay from '../components/JsonLdDisplay';
import { updateOrganization } from '../actions';
import { object, func } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

const ORG_TYPES = [
  {
    id: 'Organization',
    name: 'Organisaatio'
  },
  {
    id: 'EducationalOrganization',
    name: 'Opetusorganisaatio'
  }
];

const isValidUrl = (value) => {
  if (!value)
    return undefined;
  let a  = document.createElement('a');
  a.href = value;
  return !!(a.host && a.host !== window.location.host);
};

let Organization = ({ updateOrganization, organization }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Organisaatio</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Select options={ORG_TYPES} onChange={(type) => updateOrganization({ '@type': type })} />
          <TextInput text={organization.name} placeholder={'Nimi'} onChange={(name) => updateOrganization({ name })} />
          <TextInput text={organization.alternateName} placeholder={'Vaihtoehtoinen nimi'} onChange={(alternateName) => updateOrganization({ alternateName })} />
          <TextInput text={organization.url} placeholder={'Verkko-osoite'} onChange={(url) => updateOrganization({ url })} />
          <TextInput text={organization.logo} placeholder={'Logo (verkko-osoite)'} onChange={(logo) => updateOrganization({ logo })} />
          <ListInput isValid={isValidUrl} values={organization.sameAs} placeholder={'Sosiaalinen media'} onChange={(sameAs) => updateOrganization({ sameAs })} />
        </Col>
        <Col>
          <JsonLdDisplay jsonld={organization} />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  organization: state.organization
});

const mapDispatchToProps = ({
  updateOrganization
});

Organization = connect(
  mapStateToProps,
  mapDispatchToProps
)(Organization);

Organization.propTypes = {
  organization: object,
  updateOrganization: func,
  addToOrganization: func
};

export default Organization;
